/** Retorna true se a propriedade for nula ou indefinida. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isNil(prop : any) {
    if (prop instanceof String) {
        if (prop.trim() === '' || prop === 'undefined' || prop === 'null')
            return true
    }

    if (Number.isNaN(prop))
        return true

    if (prop === undefined || prop === null)
        return true

    return false
}
