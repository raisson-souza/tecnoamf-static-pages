"use client"

import { createContext, JSX, useCallback, useContext, useEffect, useMemo, useState } from "react"

type BrowserContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

type BrowserContext = {
    setTitle: (title: string) => void
    setUrl: (url: string) => void
    openNewWindow: (url: string) => void
    setPreventWindowClosing: (value: boolean) => void
    checkIsOnline: () => boolean
    checkIsFocusing: () => boolean
    getClipboardValue: () => Promise<string>
    setClipboardValue: (value: string) => Promise<void>
    getLocation: () => Promise<GeolocationPosition | GeolocationPositionError>
}

const BrowserContext = createContext<BrowserContext | null>(null)

/** Contexto responsável pela abstração de diversas APIs utilitárias do navegador */
export default function BrowserContextProvider({ children }: BrowserContextProviderProps) {
    const [isWindowDirty, setIsWindowDirty] = useState<boolean>(false)

    const setTitle = useCallback(
        (title: string) => document.title = title
    , [])

    const setUrl = useCallback(
        (url: string) => history.replaceState(null, "", url)
    , [])

    const openNewWindow = useCallback(
        (url: string) => window.open(url, "_blank")
    , [])

    const checkIsOnline = useCallback(
        () => navigator.onLine
    , [])

    const checkIsFocusing = useCallback(
        () => document.visibilityState === "visible"
    , [])

    const getClipboardValue = useCallback(
        async () => await navigator.clipboard.readText()
    , [])

    const setClipboardValue = useCallback(
        async (value: string) => await navigator.clipboard.writeText(value)
    , [])

    const getLocation = useCallback(
        (): Promise<GeolocationPosition | GeolocationPositionError> => {
            return new Promise((resolve) => {
                if (!navigator.geolocation) {
                    const error: GeolocationPositionError = {
                        code: 0,
                        message: 'A geolocalização não é suportada por este navegador.',
                        PERMISSION_DENIED: 1,
                        POSITION_UNAVAILABLE: 2,
                        TIMEOUT: 3,
                    }
                    resolve(error)
                    return
                }

                navigator.geolocation.getCurrentPosition(
                    (position) => { resolve(position) },
                    (error) => { resolve(error) },
                )
            })
        }
    , [])

    const setPreventWindowClosing = useCallback(
        (value: boolean) => setIsWindowDirty(value)
    , [])

    const handleBeforeUnloadDirtyWindow = useCallback(
        (event: BeforeUnloadEvent) => {
            if (isWindowDirty) {
                event.preventDefault()
                event.returnValue = ''
            }
        }
    , [isWindowDirty])

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnloadDirtyWindow)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnloadDirtyWindow)
        }
    }, [handleBeforeUnloadDirtyWindow, isWindowDirty])

    const values = useMemo(() => ({
        setTitle,
        setUrl,
        openNewWindow,
        setPreventWindowClosing,
        checkIsOnline,
        checkIsFocusing,
        getClipboardValue,
        setClipboardValue,
        getLocation,
    }), [
        setTitle,
        setUrl,
        openNewWindow,
        setPreventWindowClosing,
        checkIsOnline,
        checkIsFocusing,
        getClipboardValue,
        setClipboardValue,
        getLocation,
    ])

    return (
        <BrowserContext.Provider value={values}>
            { children }
        </BrowserContext.Provider>
    )
}

export function useBrowserContext() {
    const context = useContext(BrowserContext)
    if (!context) throw new Error("BrowserContext chamado fora do provider.")
    return context
}
