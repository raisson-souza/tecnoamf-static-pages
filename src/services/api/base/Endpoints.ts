/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteProps, GetProps, PostProps, PutProps, RequestHeader } from "./EndpointProps"
import EnvManager from "@/config/envManager"
import Response from "./Response"

export default abstract class Endpoints {
    /** Header padrão das requisições */
    private static defaultHeader: RequestHeader = { 'Content-Type': 'application/json' }
    private static apiUrl: string = EnvManager.ApiUrl.get() ?? "http://localhost:3000"

    /**
     * Monta todos os headers de uma requisição
     * @param requestHeaders Lista de headers de uma requisição
     * @param authorization Autorização da requisição
     * @returns Retorna uma sequência de headers
     */
    private static mountHeaders = (
        requestHeaders: RequestHeader[],
        authorization?: string,
    ): any => {
        if (authorization)
            requestHeaders.push({ "Authorization": `Bearer ${ authorization }` })

        this.mountDefaultHeaders(requestHeaders)

        return requestHeaders.reduce((previousHeader, currentHeader) => {
            return { ...previousHeader, ...currentHeader }
        }, {} as any)
    }

    /** Monta headers padrão */
    private static mountDefaultHeaders = (requestHeaders: RequestHeader[]) => {
        // Tratamento especial para o ngrok, visa pular o warning do browser
        requestHeaders.push({ "ngrok-skip-browser-warning": "true" })
    }

    /** Requisição GET */
    protected static async Get<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
    }: GetProps): Promise<Response<T>> {
        try {
            return await fetch(
                `${ this.apiUrl }${ url }`,
                {
                    method: 'GET',
                    headers: this.mountHeaders(headers, authorization),
                },
            )
                .then(async (response) => await this.GetResponse<T>(response))
        }
        catch (ex) {
            return this.ValidateResponse(new Response<T>({
                data: null as T,
                status: 500,
                fetchError: (ex as Error).message,
            }))
        }
    }

    /** Requisição POST */
    protected static async Post<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {},
        method = 'POST',
        isBodyFormData = false,
    }: PostProps): Promise<Response<T>> {
        try {
            if (isBodyFormData)
                headers = headers[0] === this.defaultHeader ? [] : headers

            return await fetch(
                `${ this.apiUrl }${ url }`,
                {
                    method: method,
                    headers: this.mountHeaders(headers, authorization),
                    body: isBodyFormData ? body : JSON.stringify(body),
                },
            )
                .then(async (response) => await this.GetResponse<T>(response))
        }
        catch (ex) {
            return this.ValidateResponse(new Response<T>({
                data: null as T,
                status: 500,
                fetchError: (ex as Error).message,
            }))
        }
    }

    /** Requisição PUT */
    protected static async Put<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {},
        isBodyFormData = false,
    }: PutProps): Promise<Response<T>> {
        return await this.Post<T>({
            url,
            headers,
            authorization,
            body,
            method: "PUT",
            isBodyFormData: isBodyFormData,
        })
    }

    /** Requisição DELETE */
    protected static async Delete<T>({
        url,
        headers = [this.defaultHeader],
        authorization = undefined,
        body = {},
        isBodyFormData = false,
    }: DeleteProps): Promise<Response<T>> {
        return await this.Post<T>({
            url,
            headers,
            authorization,
            body,
            method: "DELETE",
            isBodyFormData: isBodyFormData,
        })
    }

    /** Captura o dado de autenticação (token) */
    protected static async GetAuthorization(): Promise<string> {
        return ""
    }

    /** Encapsula todos os processos de tratamento para geração da Response<T> final */
    private static async GetResponse<T>(rawResponse: globalThis.Response): Promise<Response<T>> {
        const { json, hasError } = await this.ParseRawResponse(rawResponse)
        const response = this.ParseResponse<T>(json, rawResponse.status, hasError)
        return this.ValidateResponse(response)
    }

    /** Realiza o tratamento da response original da função fetch */
    private static async ParseRawResponse(rawResponse: globalThis.Response): Promise<{ json: any, hasError: boolean }> {
        try {
            return {
                json: await rawResponse.json(),
                hasError: false,
            }
        }
        catch (ex) {
            // Tratamento para requisições mal expostas (port forwarding vscode)
            if (
                (ex as Error).message === "JSON Parse error: Unexpected character: <" ||
                (ex as Error).message === "JSON Parse error: Unexpected end of input"
            ) {
                return {
                    json: "Serviço indisponível. Não foi possível conectar ao servidor. Verifique a conexão ou tente novamente mais tarde.",
                    hasError: true,
                }
            }

            // Outras capturas de erro
            return {
                json: (ex as Error).message,
                hasError: true,
            }
        }
    }

    /** Gera um Response<T> */
    private static ParseResponse<T>(
        json: any,
        responseStatus: number,
        rawResponseError: boolean,
    ): Response<T> {
        if (rawResponseError)
            return new Response<T>({ data: json, fetchError: json, status: 400 })
        return new Response<T>({ data: json, status: responseStatus })
    }

    /** Realiza as últimas validações em Response<T> */
    private static ValidateResponse<T>(response: Response<T>): Response<T> {
        const mapResponse = (expectedMsg: string, newMsg: string) => {
            if (response.ErrorMessage === expectedMsg) {
                response.Success = false
                response.ErrorMessage = `Não foi possível conectar ao servidor. ${ newMsg }`
            }
        }

        // Tratamento para requisições que falharam ao atingir o destino
        mapResponse(
            "Network request failed",
            "Verifique sua conexão com a internet ou tente novamente mais tarde.",
        )
        // Tratamento para requisições que falharam ao receber resposta do destino
        mapResponse(
            "Failed to fetch",
            "Entre em contato com o suporte ou administrador deste sistema.",
        )

        return response
    }
}
