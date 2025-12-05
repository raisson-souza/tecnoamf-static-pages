type SnackbarProps = {
    open: boolean
    time?: number
    onClose: () => void
    message: string
    color: "success" | "error" | "warning" | "info"
}

type CreateSnackbarProps = {
    time?: number
    message: string
    color?: "success" | "error" | "warning" | "info"
}

export type { SnackbarProps, CreateSnackbarProps }
