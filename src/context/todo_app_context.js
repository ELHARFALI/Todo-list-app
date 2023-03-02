import { useContext, createContext, useReducer } from "react";

import { reducer } from "../reducer/todo_app_reducer";


const TodoContext = createContext()

const initialState = {
    text: '',
    task: '',
    tasks: [],
    isComplete: false,
}


export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
      }
    
    return (
        <TodoContext.Provider value={{...state, handleSubmit}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext)
}