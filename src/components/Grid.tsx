import Cell from "./Cell"
import "./Grid.css"

function Grid({ hidden, items }: { hidden: boolean, items: string[] }) {
    return (
        <div className={hidden ? "hide" : "grid"}>
            {items.map((item, index) => <Cell key={index} text={item} />)}
        </div>
    )
}

export default Grid
