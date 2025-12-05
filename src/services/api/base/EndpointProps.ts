/* eslint-disable @typescript-eslint/no-explicit-any */
/** Tipo de header esperado */
export type RequestHeader = {
    [key: string]: string
}

// TIPAGENS BASE DE REQUISIÇÕES

/** Propriedades base de uma requisição */
type RequestProps = {
    url: string
    headers?: RequestHeader[]
    authorization?: string
}

/** Propriedades de requisições com body */
type BodySendableRequestProps = {
    body?: any
    /** Parâmetro para eliminar tratamento padrão de requisições json/application */
    isBodyFormData?: boolean
    method?: "POST" | "PUT" | "DELETE"
} & RequestProps

// TIPAGENS DOS TIPOS DE REQUISIÇÃO

export type GetProps = RequestProps

export type PostProps = BodySendableRequestProps

export type PutProps = PostProps

export type DeleteProps = PostProps
