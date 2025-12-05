"use client"

import { Alert, IconButton, Snackbar } from "@mui/material"
import { createContext, JSX, useCallback, useContext, useMemo, useState } from "react"
import { CreateSnackbarProps, SnackbarProps } from "@/types/base/snackbar"
import CloseIcon from '@mui/icons-material/Close'
import React from "react"

const SNACKBAR_DEFAULT_ACTIVE_TIME: number | undefined = 5000

type SnackbarContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

type SnackbarContext = {
    createSnackbar: (snackbar: CreateSnackbarProps) => void
    hasSnackbar: boolean
}

const SnackbarContext = createContext<SnackbarContext | null>(null)

/** Contexto responsável pela exibição e gerenciamento de uma snackbar */
export default function SnackbarContextProvider({ children }: SnackbarContextProviderProps) {
    const [ snackbar, setSnackbar ] = useState<SnackbarProps | null>(null)

    const createSnackbar = useCallback((newSnackbar: CreateSnackbarProps) => {
        setSnackbar({
            color: newSnackbar.color || "success",
            message: newSnackbar.message,
            onClose: () => setSnackbar(null),
            open: true,
            time: newSnackbar.time ? newSnackbar.time * 1000 : SNACKBAR_DEFAULT_ACTIVE_TIME,
        })
    }, [])

    const renderSnackbarAction = (_snackbar: SnackbarProps) => {
        return (
            <React.Fragment>
                <IconButton
                    size="small"
                    onClick={_snackbar.onClose}
                    color="inherit"
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
        )
    }

    const values = useMemo(() => ({
        createSnackbar,
        hasSnackbar: snackbar != null,
    }), [
        createSnackbar,
        snackbar,
    ])

    return (
        <SnackbarContext.Provider value={values}>
            {
                snackbar
                    ? <Snackbar
                        open={snackbar.open}
                        autoHideDuration={snackbar.time}
                        onClose={() => snackbar.onClose()}
                        message={snackbar.message}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        action={renderSnackbarAction(snackbar)}
                    >
                        <Alert
                            onClose={() => snackbar.onClose()}
                            severity={snackbar.color}
                            variant="filled"
                            sx={{ width: '100%' }}
                            // eslint-disable-next-line react/no-children-prop
                            children={snackbar.message}
                        />
                    </Snackbar>
                    : <></>
            }
            { children }
        </SnackbarContext.Provider>
    )
}

export function useSnackbarContext() {
    const context = useContext(SnackbarContext)
    if (!context) throw new Error("SnackbarContext chamado fora do provider.")
    return context
}
