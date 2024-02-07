import { createContext, useReducer } from "react";

let initialState = {
    darkMode: true,
};

let reducer = (state, action) => {
    switch (action.type) {
        case "Light":
            document.body.style.backgroundColor = "";
            return {
                darkMode: true,
            };
        case "Dark":
            document.body.style.backgroundColor = "red";
            return {
                darkMode: false,
            };
        default:
            return state;
    }
   
};

export const ThemChangerContext = createContext(initialState);

export let ThemChangerContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemChangerContext.Provider value={{ state: state.darkMode, dispatch }}>
            {children}
        </ThemChangerContext.Provider>
    );
};
