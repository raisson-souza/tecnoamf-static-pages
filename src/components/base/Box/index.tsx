import "./styles.css"
import { CSSProperties, JSX } from "react"

type CustomBoxProps = {
    children: JSX.Element | JSX.Element[]
    style?: CSSProperties 
    onClick?: () => void
    className?: string
    id?: string
}

type BoxProps = {
    Column: (props: CustomBoxProps) => JSX.Element
    Center: (props: CustomBoxProps) => JSX.Element
    Row: (props: CustomBoxProps) => JSX.Element
}

/** Div pré pronta e customizável */
const Box: BoxProps = { 
    Column: ({ children, style, onClick, className, id, }) => {
        return <div
            style={ style }
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onClick={ () => { onClick ? onClick() : null }}
            className={ `box-column ${ className || "" }` }
            id={ id }
        >
            { children }
        </div>
    },
    Center: ({ children, style, onClick, className, id, }) => {
        return <div
            style={ style }
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onClick={ () => { onClick ? onClick() : null }}
            className={ `box-center ${ className || "" }` }
            id={ id }
        >
            { children }
        </div>
    },
    Row: ({ children, style, onClick, className, id, }) => {
        return <div
            style={ style }
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onClick={ () => { onClick ? onClick() : null }}
            className={ `box-row ${ className || "" }` }
            id={ id }
        >
            { children }
        </div>
    },
}

export default Box
