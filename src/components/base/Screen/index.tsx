import "./styles.css"
import { CircularProgress } from "@mui/material"
import { JSX } from "react"
import Box from "../Box"

/** Propriedades do componente Screen */
type ScreenProps = {
    /** Componentes filhos. */
    children: JSX.Element | JSX.Element[]
    /** Componente personalizado para header. */
    headerComponent?: JSX.Element
    /** Aparição do header. */
    showHeader?: boolean
    /** Componente personalizado para footer. */
    footerComponent?: JSX.Element
    /** Aparição do footer. */
    showFooter?: boolean
    /** Componente personalizado para section. */
    sectionComponent?: JSX.Element
    /** Largura da section. */
    sectionWidth?: number
    /** Aparição do section. */
    showSection?: boolean
    /** Customizações para tela padrão de carregamento. */
    loading?: {
        isLoading: boolean
        loadingText?: string
        showHeader?: boolean
        showFooter?: boolean
    }
}

/**
 * Componente base para telas.
 * */
export default function Screen({
    children,
    headerComponent,
    showHeader = true,
    footerComponent,
    showFooter = true,
    sectionComponent,
    sectionWidth,
    showSection = true,
    loading,
}: ScreenProps) {
    // Se o header existe e deve aparecer, é montado
    const header = headerComponent && showHeader
        ? (
            <header id="screen-header">
                { headerComponent }
            </header>
        )
        : <></>

    // Se o footer existe e deve aparecer, é montado
    const footer = footerComponent && showFooter
        ? (
            <footer id="screen-footer">
                { footerComponent }
            </footer>
        )
        : <></>

    // Se o section existe e deve aparecer, é montado
    const _section = sectionComponent && showSection
        ? (
            <section
                style={{
                    width: sectionWidth ? `${ sectionWidth }%` : "unset",
                }}
                id="screen-section"
            >
                { sectionComponent }
            </section>
        )
        : <></>

    return (
        <div id="screen">
            {
                (loading && loading.isLoading)
                    ? <>
                        { loading.showHeader && header }
                        <main id="screen-main">
                            <Box.Column id="screen-main-loading-box">
                                <h1>
                                    {
                                        loading.loadingText
                                            ? loading.loadingText
                                            : "Carregando"
                                    }
                                </h1>
                                <CircularProgress size={ 30 } />
                            </Box.Column>
                        </main>
                        { loading.showFooter && footer }
                    </>
                    : <>
                        { header }
                        <main id="screen-main">
                            { _section }
                            <div id="screen-main-content">
                                { children }
                            </div>
                        </main>
                        { footer }
                    </>
            }
        </div>
    )
}
