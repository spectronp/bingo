import "./EditText.css"

function EditText({ hidden, items, setItems }: { hidden: boolean, items: string[], setItems: (newValue: string[]) => void }) {

    let placeholder = "Write 1 cell per line here and then click on the 'Grid' button\n\n - Maximum of 9 cells (thats the height of the textarea already)"
    let maximumLength = 9

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;

        let itemsList = value.split("\n");
        if (itemsList.length > maximumLength) {
            itemsList = itemsList.slice(0, maximumLength)
        }
        setItems(itemsList)
    }

    function handleKeyPress(e: React.KeyboardEvent) {
        if (e.key !== "Enter") {
            return
        }
        if (items.length === maximumLength) {
            e.preventDefault()
        }
    }

    return (
        <textarea placeholder={placeholder} className={hidden ? "hide" : "edit-text"} rows={9} value={items.join("\n")} onChange={handleChange} onKeyDown={handleKeyPress} />
    )
}

export default EditText

