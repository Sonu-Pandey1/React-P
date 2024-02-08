import { createContext, useReducer } from "react";

let initialState = {
    darkMode: false,
}

let reducer = (state, action) => {
    switch (action.type) {
        case "Dark":
            document.body.style.backgroundColor = "black"

            return {
                darkMode: true
            }
        case "Light":
            document.body.style.backgroundColor = ""

            return {
                darkMode: false
            }
        default: return state
    }
}

export const ThemChangeContext = createContext(initialState)

export let ThemChangeContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ThemChangeContext.Provider value={{ state: state, dispatch }}>
            {children}
        </ThemChangeContext.Provider>
    )
}