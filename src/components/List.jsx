import { useContext } from "react"
import { ToDoItem } from "./ToDoItem"
import { ToDoContext } from "../Context"

export const List = () => {

    const {todos,  currentFilter} = useContext(ToDoContext)


    let filtered = todos
    
    if(currentFilter == 'active') {
        filtered = todos.filter(a => !a.completed)

    } else if(currentFilter == 'completed') {
        filtered = todos.filter(a => a.completed)
    }

    return <>
    <p>showing: <strong>{currentFilter}</strong></p>

        {
            filtered.map(todo => <ToDoItem 
                key ={todo.id} 
                todo={todo} 
                />
            )
        }
    
    </>
}