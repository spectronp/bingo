import { TabsType } from "./BingoSet"
import "./Tabs.css"

function Tabs({ open, setOpen }: { open: TabsType, setOpen: (newValue: TabsType) => void }) {

    const tabs = Object.values(TabsType).map(tab => <li key={tab}><button className="tab" onClick={() => setOpen(tab)}>{tab.toString()}</button></li>)

    return (
        <ul className="tabs">
            {tabs}
        </ul>
    )
}

export default Tabs

