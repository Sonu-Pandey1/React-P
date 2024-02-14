import { createContext, useReducer } from "react";

let initialState = 0

let reducer = (state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1
        default :
        return state
    }

}

export const counterContext = createContext()

export function CounterContext({children}){

    const [state,dispetch] = useReducer(reducer,initialState);

    return(
        <counterContext.Provider value={{state:state,dispetch:dispetch}}>
            {children}
        </counterContext.Provider>
        
    )
}



