import { JSX } from "react"
import BrowserContextProvider from "@/contexts/BrowserContext"
import SnackbarContextProvider from "@/contexts/SnackbarContext"

type GlobalProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export default function GlobalProvider({
    children,
}: GlobalProviderProps) {
    return (
        <BrowserContextProvider>
            <SnackbarContextProvider>
                {children}
            </SnackbarContextProvider>
        </BrowserContextProvider>
    )
}
