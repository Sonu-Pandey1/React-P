import { createContext, useReducer } from "react";

let initilState = 0;

let reducer = (state,action)=>{
    switch(true){
        case(action.type ==="increment"):{
            return state = state+1;
        }
        case(action.type ==="decrement"):{
            return state = state+1;
        }
        default :{
            return state;
        }

    }

}

let CounterContext2 = createContext()

 function CounterContext22({children}){

    
    let [state,dispatch] = useReducer(reducer,initilState);

    return(
        <CounterContext2.Provider value={{state,dispatch}}>
            {children}
        </CounterContext2.Provider>
    )
}
export default CounterContext22;

