import "./styles.css"
import Box from "../Box"
import theme from "@/config/theme"

export default function Header() {
    return <Box.Row
        style={{
            backgroundColor: theme.primary,
            color: theme.textColor,
            boxShadow: theme.boxShadowBlack,
        }}
        id="custom-header"
    >
        <h1>TECNOAMF</h1>
    </Box.Row>
}
