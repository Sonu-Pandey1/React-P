import { useState } from "react";
// import { decrement, increment } from "../Reducers";
// import { decrement } from "../Reducers";

let useCustomHook = ()=>{
    console.log("custom hook functionility is runnning ")
    const [counter,setCounter] =useState(0)

    const increment = ()=>{
        setCounter(counter+1)
    }

    const decrement = ()=>{
        setCounter(counter-1)
    }
    return [counter,increment,decrement]


}

export default useCustomHook;