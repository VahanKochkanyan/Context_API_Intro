import { useContext } from "react"
import { ToDoContext } from "../Context"

export const ToDoItem = ({todo}) => {

    const { handleUpdate, handleDelete} = useContext(ToDoContext);
    
    return (<div className= {"todo " + (todo.completed ? "done" : "") }>
        <p>{todo.text}</p>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
        <button onClick={() => handleUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETE"}</button>
    </div>
    )
} 