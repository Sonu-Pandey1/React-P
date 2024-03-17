import { createContext, useReducer } from "react"


let initialState = 0

let reducer = (state,action)=>{
    switch(action.type){
        case"increment": return state+1;
        case"decrement": return state-1;
        default :return state;
    }

}

export const userContext = createContext();

let  UserContexttt = ({children})=>{
    let [state,dispatch] = useReducer(reducer,initialState);

    return(
        <userContext.Provider value={{state:state,dispatch:dispatch}}>
        {children}
    </userContext.Provider>
    )

}

export default UserContexttt;




