// import { useState } from "react";
// // // import { decrement, increment } from "../Reducers";
// // // import { decrement } from "../Reducers";

import { useReducer, useState } from "react";

// let useCustomHook = ()=>{
//     console.log("custom hook functionility is runnning ")
//     const [counter,setCounter] =useState(0)

//     const increment = ()=>{
//         setCounter(counter+1)
//     }

//     const decrement = ()=>{
//         setCounter(counter-1)
//     }
//     return [counter,increment,decrement]


// }

// export default useCustomHook;











let useCustomHook = ()=>{

    let [counter, setCounter] = useState(0)

    let increment = ()=>{
        setCounter(counter=counter+1)
    }

    let decrement = ()=>{
        setCounter(counter=counter-1)

    }

    return [counter,increment,decrement];
}

export default useCustomHook;













