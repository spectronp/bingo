import { useState } from "react"
import "./Cell.css"

function Cell({ text }: { text: string }) {
    const [checked, setChecked] = useState(false)

    function handleClick() {
        if (checked) {
            setChecked(false)
            return
        }

        setChecked(true)
    }

    return (
        <button type="button" className={checked ? "cell checked-cell" : "cell unchecked-cell"} onClick={handleClick} >{text}</button>
    )
}

export default Cell

