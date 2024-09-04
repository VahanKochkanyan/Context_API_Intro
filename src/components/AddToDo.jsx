import { useContext } from "react"
import { useState } from "react"
import { ToDoContext } from "../Context"

export const AddToDo = () => {

    const {handelAdd} = useContext(ToDoContext)

    const [text, setText]  = useState("")

    const handelSubmit = event => {
        event.preventDefault()
        if(text.trim()) {
            handelAdd(text)
            setText("")
        }
    }

    return <>
        <form onSubmit={handelSubmit}>
            <input 
                type="text" 
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button>Submit</button>
        </form>
    </>
}