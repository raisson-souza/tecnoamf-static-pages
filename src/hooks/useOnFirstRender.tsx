import { useEffect } from "react"

type UseOnFirstRenderProps = () => void | Promise<void>

export default function useOnFirstRender(callback: UseOnFirstRenderProps) {
    useEffect(() => {
        callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
