
{/* 1 times compl*/}
{/* 2  time statrt 10/02/2024*/}

import { createContext, useReducer, useState } from 'react'
import './App.css'
import Practice from './Component/Practice'


function App() {

    return (
        <>
{/* //! notebook Questions ----------

    //? 1 what is react & why is so popular  ?
    //? 2 what is features of react js ?
    //? 4 what is jsx ?
    //? 5 what is react fragment ?
    //? 6 what are the hight order component and its use ?
    //? 7 what is life-cycle method & its methods ?
    //? 8 what is component & types of component & what you preffred ?
    //? 9 what is prop-dreling in react ?
    //? 10 what is key in react & use of key & why use key ?
    //? 11 can jsx directly read by the web browser ?
    //? 12 why use react instends of other framworks ?
    //? 13 how react diffrent with angular ?
    //? 14 what is react-router ? is`s work ?
    //? 15 what is state ?
    //? 16 what is props ?
    //? 17 diffrence bitween state and props ?
    //? 18 what is controled component ?
    //? 19 what is uncontroled component ?
    //? 20 what is statefull component ?
    //? 21 what is stateless component ?
    //? 22 what is pure compponent diffrence bitween pure and high-order-component ?
    //? 23 what is lazy-loading ?
    //? 24 what is error-boundery ?
    //? 25 what is render ?
    //? 26 what is hooks in react & it`s type explain all with exapmple ?
    //*? 27 what is dom , diffrence bitween virtual dom and real dom ?
    //? 28 what is reconsiliation ? 
    //? 29 what are the technologyes used to optimize react app ?
    //? 30 what is event and synthic event in react ?
    //? 31 what is unideractional flow ?
    //? 32 what is flux ?
    //? 33 what is redux ?
    //? 354diffrence bitween redux and context api/use context ?
    //? 35 what is middleware ?
    //? 36 what is redux and what is redux flow ? explain it ?                                                                      
*/}


            {/* //todo--- pc/ Logicial Questions  */}

            {/* //! 1 example of classs based componenrt  props,stste,defalut props ,propstype ? */}
            {/* //! 2 example of Function based component, use of use-state props, props in destrustred way and also as pass a spread oprator way obj ? */}
            {/* //! 3 hide and show h1 on click ? */}
            {/* //! 4 toggle h1 on click ?  */}
            {/* //! 5 get the data from form ? */}
            {/* //! 6 basic form validition ? */}
            {/* //! 7 explain life cycle methods and is method ? */}
            {/* //! 8 lifting state / send data  child components to parent component ? */}
            {/* //! 9 explain high order component with example ? */}
            {/* //! 10 get previous state in function based component with example ? */}            
            {/* //! 11 previous props in function based component with example ? */}
            {/* //! 12 state with object means that state main object pas karne par issue is that whole object are chnage when we change only one property so avoide this we use spard oprator ? */}
            {/* //! 13 explain hook and there types with example use state , use effect ,  use ref , use layouteffect custome hook ,use memo ,  use context , use callback ,   ? */}

           
            {/* <lightContext.Provider value={"khusboooo}>
            <Practice/>
            </lightContext.Provider> */}

            {/* //! 14 useReducer + UseCOntext Example */}
            {/* <stateContext.Provider value={{state:state,dispatch:dispatch}}>
            <h2>{state}</h2> */}
            {/* <Practice/> */}
            {/* </stateContext.Provider> */}
            {/* <Practice mode = {mode} toggler = {toggler} /> */}
            {/* <Practice/> */}
            {/* <Practice/> */}

            {/*//! 15 implimint redux  */}
            {/* <Practice /> */}
            {/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); */}


            {/*//! 16 implimint redux toolkit */}
            {/* <Practice/> */}

            {/* //! 17 setup routing togather nexted routing and dyanamic routing ? */}
            {/* //! 18 use of seacrchParams and setsearchParamas hooks in rrd // for give the output on the basics of what will serch/query in the url ? */}

            {/* //! 19 navigating on click / use of usenavigate hooks in rrd ? */}
            {/* //! 20 use of  use location hooks/ gives all the data of parent component  / reeadony porpuse i dont gt */}
            {/* //! 21 use protected route hooks  ( we also do that with the help of high-order component where we can paas a condition that if user is active then navigate to children(routes) else navigate login) ? */}

            {/* //! 22 firebase confidgure set user (login , logout registration ,admin login) */}
            {/* //! 23 firebase configure (get set and update data in firbase ) */}

        </>
    )
}

export default App


// {//! 3  time statrt /}

// import { createContext, useReducer, useState } from 'react'
// import './App.css'
// import Practice from './Component/Practice'


// function App() {

//     return (
//         <>
// {/* //! notebook Questions ----------

//     //? 1 what is react & why is so popular  ?
//     //? 2 what is features of react js ?
//     //? 4 what is jsx ?
//     //? 5 what is react fragment ?
//     //? 6 what are the hight order component and its use ?
//     //? 7 what is life-cycle method & its methods ?
//     //? 8 what is component & types of component & what you preffred ?
//     //? 9 what is prop-dreling in react ?
//     //? 10 what is key in react & use of key & why use key ?
//     //? 11 can jsx directly read by the web browser ?
//     //? 12 why use react instends of other framworks ?
//     //? 13 how react diffrent with angular ?
//     //? 14 what is react-router ? is`s work ?
//     //? 15 what is state ?
//     //? 16 what is props ?
//     //? 17 diffrence bitween state and props ?
//     //? 18 what is controled component ?
//     //? 19 what is uncontroled component ?
//     //? 20 what is statefull component ?
//     //? 21 what is stateless component ?
//     //? 22 what is pure compponent diffrence bitween pure and high-order-component ?
//     //? 23 what is lazy-loading ?
//     //? 24 what is error-boundery ?
//     //? 25 what is render ?
//     //? 26 what is hooks in react & it`s type explain all with exapmple ?
//     //*? 27 what is dom , diffrence bitween virtual dom and real dom ?
//     //? 28 what is reconsiliation ? 
//     //? 29 what are the technologyes used to optimize react app ?
//     //? 30 what is event and synthic event in react ?
//     //? 31 what is unideractional flow ?
//     //? 32 what is flux ?
//     //? 33 what is redux ?
//     //? 354diffrence bitween redux and context api/use context ?
//     //? 35 what is middleware ?
//     //? 36 what is redux and what is redux flow ? explain it ?                                                                      
// */}


//             {/* //todo--- pc/ Logicial Questions  */}

//             {/* //! 1 example of classs based componenrt  props,stste,defalut props ,propstype ? */}
//             {/* //! 2 example of Function based component, use of use-state props, props in destrustred way and also as pass a spread oprator way obj ? */}
//             {/* //! 3 hide and show h1 on click ? */}
//             {/* //! 4 toggle h1 on click ?  */}
//             {/* //! 5 get the data from form ? */}
//             {/* //! 6 basic form validition ? */}
//             {/* //! 7 explain life cycle methods and is method ? */}
//             {/* //! 8 lifting state / send data  child components to parent component ? */}
//             {/* //! 9 explain high order component with example ? */}
//             {/* //! 10 get previous state in function based component with example ? */}            
//             {/* //! 11 previous props in function based component with example ? */}
//             {/* //! 12 state with object means that state main object pas karne par issue is that whole object are chnage when we change only one property so avoide this we use spard oprator ? */}
//             {/* //! 13 explain hook and there types with example use state , use effect ,  use ref , use layouteffect custome hook ,use memo ,  use context , use callback ,   ? */}

           
//             {/* <lightContext.Provider value={"khusboooo}>
//             <Practice/>
//             </lightContext.Provider> */}

//             {/* //! 14 useReducer + UseCOntext Example */}
//             {/* <stateContext.Provider value={{state:state,dispatch:dispatch}}>
//             <h2>{state}</h2> */}
//             {/* <Practice/> */}
//             {/* </stateContext.Provider> */}
//             {/* <Practice mode = {mode} toggler = {toggler} /> */}
//             {/* <Practice/> */}
//             {/* <Practice/> */}

//             {/*//! 15 implimint redux  */}
//             {/* <Practice /> */}
//             {/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ); */}


//             {/*//! 16 implimint redux toolkit */}
//             {/* <Practice/> */}

//             {/* //! 17 setup routing togather nexted routing and dyanamic routing ? */}
//             {/* //! 18 use of seacrchParams and setsearchParamas hooks in rrd // for give the output on the basics of what will serch/query in the url ? */}

//             {/* //! 19 navigating on click / use of usenavigate hooks in rrd ? */}
//             {/* //! 20 use of  use location hooks/ gives all the data of parent component  / reeadony porpuse i dont gt */}
//             {/* //! 21 use protected route hooks  ( we also do that with the help of high-order component where we can paas a condition that if user is active then navigate to children(routes) else navigate login) ? */}

//             {/* //! 22 firebase confidgure set user (login , logout registration ,admin login) */}
//             {/* //! 23 firebase configure (get set and update data in firbase ) */}

//         </>
//     )
// }

// export default App;

