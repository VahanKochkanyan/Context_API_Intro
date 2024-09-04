import { useState } from "react"
import { AddToDo } from './AddToDo'
import { List } from './List' 
import { FilterToDo } from "./FilterToDo"
import { ToDoContext } from "../Context"

export const ToDoList = () => {

    const [todos, setTodos] = useState([
        { id: 101, text: "Task-1", completed: false },
        { id: 102, text: "Task-2", completed: false },
        { id: 103, text: "Task-3", completed: false },

    ])

    const [currentFilter, setCurrentFilter] = useState("all")


    const handleAdd = text => {
        setTodos([...todos, {text, completed:false, id: Date.now() }])
    }

    const handleUpdate = id => {
        setTodos(todos.map(todo => 
            todo.id != id ? todo: {...todo, completed: !todo.completed}))
    }

    const handleDelete = id => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    return <>
    <ToDoContext.Provider value={{handleAdd, currentFilter, onSet:setCurrentFilter, handleUpdate, handleDelete, todos, setTodos}}>

        <AddToDo />

        <FilterToDo />

        <List />

        </ToDoContext.Provider>
    </>
}