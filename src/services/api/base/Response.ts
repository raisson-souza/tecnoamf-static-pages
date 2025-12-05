/** Tipo esperado no construtor da classe Response */
type ResponseProps<T> = {
    /** Dados recebidos da requisição */
    data: T
    /** Status da requisição */
    status: number
    /** mensagem de erro do catch */
    fetchError?: string
}

/** Classe responsável pelo gerenciamento de responses */
export default class Response<T> {
    /**
     * Status da requisição.  
     * Obtido através do status padrão da response.status.
     * */
    Status: number
    /**
     * Sucesso da requisição.  
     * */
    Success: boolean
    /**
     * Retorno da requisição.  
     * */
    Data: T
    /**
     * Mensagem de erro padrão caso erro no fetch
    */
    ErrorMessage?: string | T

    constructor({ data, status, fetchError }: ResponseProps<T>) {
        this.Status = status
        this.Success = status < 400
        this.Data = data
        this.ErrorMessage = fetchError ? fetchError : data
    }
}
