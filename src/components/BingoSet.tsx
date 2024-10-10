import { useState } from "react";
import Grid from "./Grid";
import Tabs from "./Tabs";
import EditText from "./EditText";

export enum TabsType {
    Grid = "Grid",
    Edit = "Edit"
}

function BingoSet() {
    const [items, setItems] = useState<string[]>([]);
    const [openTab, setOpenTab] = useState(TabsType.Edit);

    return (
        <>
            <Tabs open={openTab} setOpen={setOpenTab} />
            <EditText hidden={openTab !== TabsType.Edit} items={items} setItems={setItems} />
            <Grid hidden={openTab !== TabsType.Grid} items={items} />
        </>
    )
}

export default BingoSet
