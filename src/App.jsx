{
    /* 1 times compl*/
}
{
    /* 2  time statrt 10/02/2024*/
}

import { createContext, useReducer, useState } from "react";
import "./App.css";
import Practice from "./Component/Practice";
// import Practice from './Component/Practice'

// let initialState = 0

// let reducer = (state,action)=>{
//     switch(action.type){
//         case "increment":
//             return state+1;

//         case "decrement":
//             return state-1

//         default:
//             return state
//     }

// }
// let counterContext = createContext()

function App() {
    let [counter,setCounter] = useState(0)
    // const [state,dispatch] = useReducer(reducer,initialState)

    // let HOCRed = ({cmd})=>{
    //    return(
    //     <div style={{backgroundColor:"red"}}>{cmd}</div>
    //    )
    // }

    // let HOCBlue  =({cmd})=>{
    //     return(
    //         <div style={{backgroundColor:"blue"}}>{cmd}</div>
    //     )
    // }

    // let fun = (a)=>{
    //     console.log(`hy ${a}`)
    // }

    // let fun = (a)=>{
    //     console.log(a)
    // }

    // let HOCRed = ({com})=>{
    //     return(
    //         <>
    //             <div style={{backgroundColor:"red"}}>{com}</div>
    //         </>
    //     )
    // }

    // let HOCBlue = ({com})=>{
    //     return(
    //         <>
    //            {data? <div style={{backgroundColor:"blue"}}>{com}</div>:""}
    //         </>
    //     )
    // }

    return (
        <>
            {/* //! notebook Questions ----------

    //? 1 what is react & why is so popular  ?

    //todo--> react is a most popular open-source free javascript libarary which is used to building intractive & dyanamic interfaces .
    //todo--> it is popular due to it`s assintial features react works on component based aracture which allow to user to brakdown a complex user intarface in to simple and small parts , is`s work on virtual dom which make react more fasster to others and its also support jsx and one way data binding .

    //? 2 what is features of react js ?

    //todo--> there are many feature in react js like--
    1 component based aracture
    2 jsx
    3 one way data binding
    4 virtual dom
    5 easy to learn etc.

    //? 4 what is jsx ?

    //todo--> jsx stnad for javascript syntax extension , it`s allow to use html in react .

    //? 5 what is react fragment ?

    //todo-->  react fragment is a popular feature in react js , it`s allow to a component to return multiple element without adding a extra node to the dom ,it`s wrap all the element to a root element .

    //? 6 what are the hight order component and its use ?

    //todo--> high order component is a component which take another component as a argument and return a component is called hoc , it is manly use when we have a component logic and thats need other also then we wrap that component inside it .

    //? 7 what is life-cycle method & its methods ?

    //todo--> life -cycle methods are custom functionality which are exituted during difrenet phases of life-cycle , every component have lifecycle methods ,there are manly 3 methods mounting,updating,unminting .

    //! mounting -- mounting happen when a component firstly render to the dom in this phase of lide-cycle react have 4 build-in mwthods thats geta exitued when mounting a component .
    1 constructor
    2 getDrivesStateFromProps
    3 render
    4 componentDidMount
    
    //! updating -- updating is a next phase of life-cycle , its happening when thre is changes on component props or state in this phase react have 5 build-in methods that get exituted when a component updated .
    1 getDrivedStateFromProps
    2 shouldComponentUpdate
    3 render 
    4 getSnapSortBeforeUpdate
    5 componentDidUpdate

    //! unmounting -- unmounting is a next phase of lifecycle its happen a component removes from the dom in this phase react have only 1 build-in method 
    1 componentWillUnmounte

    //? 8 what is component & types of component & what you preffred ?

    //todo--> component is a independent bites of code , which perform same functionality as a javascript function but work in isolation ,there are 2 tyoe of function function based component and class based componenent , i prefread function based component because the main diffrence bitween function and class based comoonrnt is syntax , function based component have plan js object whuch take a argument as a props and return resct element  and the other hand class based component is need to extend from component then create a render methods then return a react element .                                                                                                                                                                                                                                  

    //? 9 what is prop-dreling in react ?

    //todo--> when we pass a props to a nexted component to reached that component whcih need to the data is called prop-dreling , it`s create code complicated to complax to maintain so reducwe that we use use context or redux which manage tha data globally so that we dont nedd to paas the data as props because now data is availabe globally so we can directly access it .

    //? 10 what is key in react & use of key & why use key ?

    //todo--> key is a special symbol which is include when creating a list of items , so that identify which item change ,delete ,update ,without key react rely on other mthods to identigy which item change,delte in the absounce of the key , its also create bug an error ,so key is import to react to identofy .

    //? 11 can jsx directly read by the web browser ?

    //todo--> jsx doenot read  directily by the web browser because web browser are support only regilar js object jsx is not a regilar js object so we need to transform to it in to normal js object , we do that usig babel .js.

    //? 12 why use react instends of other framworks ?

    //todo--> beacuse react is more faster to other due to virtual dom and its work on component based aractur so that we can breakdown complex ui in to smaller and simple parts , its also support jasx and onewhay data biding .

    //? 13 how react diffrent with angular ?

    //todo--> react is a js libaray , angilar is frontend framwork , react created by fb angular created bygoogle , react support oneway date binding and virtual dom angular support twoway data binding anf real dom etc.

    //? 14 what is react-router ? is`s work ?

    //todo--> react router is a js libarary which is use to handele routing in react js  its enable singl page navigation .

    //? 15 what is state ?

    //todo--> state is a build in object in react  which is used to manage data or information about the component , state is both read and write .

    //? 16 what is props ?

    //todo--> props stand for property it is use to store the data tha can be consumed by children . is is read inly .

    //? 17 diffrence bitween state and props ?

    //todo--> the main difrrent state and props is that props are read only state is both read and write , props are used to transfer the data parent component to child component and state are used to manage the data inside the component itsself.

    //? 18 what is controled component ?

    //todo--> control comppnent are the component in which form data can be handle by the react state ,

    //? 19 what is uncontroled component ?

    //todo--> which component form data handle throught r=use ref or js method called control componrnt .

    //? 20 what is statefull component ?

    //todo--> state full component are the component which havwe state object like class based cmd

    //? 21 what is stateless component ?

    //todo--> stateless component are the component which does not any state object .

    //? 22 what is pure compponent diffrence bitween pure and high-order-component ?

    //todo--> pure component are the component which dees not rerender when state or props update with the same value . hoghr order component are the component whcih takes another component as a argument and return component , it is many use when we want to provide extra functinility to a component .

    //? 23 what is lazy-loading ?

    //todo--> laxy loding is a most popular meyhosd in react which load the only nesssesary data when they need enstand load all the data ones , its improve app speed reduce the time consumption reduce the bandwidth.etc

    //? 24 what is error-boundery ?

    //todo--> error-boundery is a react component which is used to handle runtime error n react its provide a fall back ui instand the component that curresd.

    //? 25 what is render ?

    //todo--> render is a classbased component method which is responsible to rneder thwe ui. 

    //? 26 what is hooks in react & it`s type explain all with exapmple ?

    //todo--> hooks are reduiable bites of code that provide classbased feature in function based component .there are diffrent type of hooks use satate , use effect , use ref , use layout efeect , use reducer , use context , use custom hoooke , use memo , use call back etc . 

    //*? 27 what is dom , diffrence bitween virtual dom and real dom ?

    //todo--> dom satnd for documet object modal through dom we can acces id,class,element ,etc of the html throught the js we can also access html as weel as scc of the webpage .

    //!real dom real dom is a real representaion  od the dom its render on the every changes in the dom , it is more time consumiing becasue of dairect mutabletion.

    //virtual dom is a virtual representation of the  dom  in which when a state or props updates chanegs then react create  ane virtual reperecention of the dom and then it sync only nesserary changes in to dom its also called reconsilation , its is kess time consuming becase dairect mutsble isvery lees

    //? 28 what is reconsiliation ? 

    //todo--> recinsilation is the process when react update the dom

    //? 29 what are the technologyes used to optimize react app ?

    //todo--> there are diffrent tech,, is used to optmize react app 
    1 laxy loding
    2 usememo
    3 use callback
    4 using ssr
    5 uimage optmixation

    //? 30 what is event and synthic event in react ?

    //todo--> event is a action which can be trigred on user action , there are diffrent types of event like mouse event keybord event etc ,
    synthic event are  the special events which react used to perform same functionilat all the broeser it is a wrapper on actual events

    //? 31 what is unideractional flow ?

    //todo--> unideractional dATA flow mins react data flow in parent to child

    //? 32 what is flux ?

    //todo--> flux is a libaray used to manage state globally it is similer to redux but redux have only 1 store flux have moe then 1.

    //? 33 what is redux ?

    //todo--> redux is a open-source free javascript libarary used for managing state globally , manely redux used in react and angular ,react-redux is a official bind to redux in to reaact . 

    //? 34 diffrence bitween redux and context api/use context ?

    //todo--> use coneext is situable for the senirio whrer state management is not cirticial and infrequent or simple in the other hand redux is ude ehere state managment is cirticial or complaxt and infrequient redux also provide more functionlty compare to use context wwe use redux a big project because this is liti bit big to implimient .

    //? 35 what is middleware ?

    //todo-->  midileware is used to provide extra functionality to redux without changing its behaviour  and it is also used to handle asyncronous operations .

    //? 36 what is redux and what is redux flow ? explain it ?    

    //todo--> redux is a js libaray whoch manage the data globally , redux flow describe how data flow in the diffrent parts of redux there are 4 many parts of reduxx
    //* 1 Action
    //* 2 Middleware
    //* 3 Reducers
    //* 4 Store

    //! Action --> 
    //todo -- action is a plan javascript object which define what type of action is and assosited data (payload )
    
    //! Middleware -- >
    //todo -- midleware in redux is like a getkeeper in betweeen action and reducers it stop the action before reach to reducers and perform some functilitrty  without changing its behavoiur it is provise more functionlity to redux .

    //! reducers -- >
    //todo -- reducers are the pure function which is responsibale to take action and update the sate mins reducers decide how to do and action decide what to do .

    //! store -- >
    //todo --  store is a react object which used to stroe the data globally we can fetch the dasta  through methods provide by store.
*/}

            {/* //todo--- pc/ Logicial Questions  */}

            {/* //! 1 example of classs based componenrt  props,stste,defalut props ,propstype ? */}
            {/* <Practice cont = "ki jay"/> */}
            {/* <Practice name={"ram"}/> */}
            {/* //! 2 example of Function based component, use of use-state props, props in destrustred way and also as pass a spread oprator way obj ? */}
            {/* <Practice name ="ram"/> */}
            {/* <Practice cont = {"ki jay"}/> */}
            {/* //! 3 hide and show h1 on click ? */}
            {/* <Practice/> */}
            {/* <Practice/> */}
            {/* //! 4 toggle h1 on click ?  */}
            {/* <Practice/> */}
            {/* <Practice/> */}
            {/* //! 5 get the data from form ? */}
            {/* <Practice/> */}
            {/* <Practice/> */}
            {/* //! 6 basic form validition ? */}
            {/* //! 7 explain life cycle methods and is method ? */}
            {/* {data?<Practice subCounter = {5}/>:""}
            <button onClick={()=>{setdata(!data)}}>delete</button> */}
            {/* {counter?<Practice />:""}
            <button onClick={()=>{setCounter(counter=!counter)}}>btn app delte</button> */}
            {/* //! 8 lifting state / send data  child components to parent component ? */}
            {/* <Practice fun={fun}/>
            <button onClick={()=>{fun()}}>btn parent </button> */}
            {/* <Practice fun = {fun}/> */}
            {/* //! 9 explain high order component with example ? */}
            {/* <HOCRed com = {<Practice/>}/>
            <HOCBlue com = {<Practice/>}/> */}
            {/* <HOCRed cmd={<Practice/>}/>
            <HOCBlue cmd={<Practice/>}/> */}
            {/* //! 10 get previous state in function based component with example ? */}
            {/* <Practice/>          */}
            {/* <Practice/> */}
            {/* //! 11 previous props in function based component with example ? */}
            {/* <Practice counter = {counter}/>
            <button onClick={()=>{setCounter(counter+1)}}>btn parent</button> */}
            {/* <Practice counter = {counter}/> */}
            {/* //! 12 state with object means that state main object pas karne par issue is that whole object are chnage when we change only one property so avoide this we use spard oprator ? */}
            {/* <Practice/> */}
            {/* //! 13 explain hook and there types with example use state , use effect ,  use ref , use layouteffect custome hook ,use memo ,  use context , use callback ,   ? */}
            {/* <counterContext.Provider value={{state:state,dispatch:dispatch}}>
            <Practice/>
            </counterContext.Provider> */}
            <Practice/>


































            {/* //! 14 useReducer + UseCOntext Example */}

            {/* <Practice/> */}

            {/* <stateContext.Provider value={{state:state,dispatch:dispatch}}>
            <h2>{state}</h2> */}
            {/* <Practice/> */}
            {/* </stateContext.Provider> */}
            {/* <Practice mode = {mode} toggler = {toggler} /> */}
            {/* <Practice/> */}
            {/* <Practice/> */}

            {/*//! 15 implimint redux  */}

            {/* <Practice/> */}

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
    );
}

export default App;
// export const [counterContext]
// export {counterContext}

// {//! 3  time statrt /}
// retake 11/03/2024

// import { createContext, useReducer, useState } from 'react'
// import './App.css'
// import Practice from './Component/Practice'

// function App() {

//     return (
//         <>
// {/* //! notebook Questions ----------

//     //? 1 what is react & why is so popular  ?

//todo--->> ract is a most popular open sources javascript laibaray which is used to developer intreactive and dyanamic user interfaces , it based on component basd aracture ,
// it is most popular due to its assistinal feture like vartual dom, component based aracture , easy tgo learn , jsx , one wya data binding ,etc 

//     //? 2 what is features of react js ?

//todo ===>> react have many features like 
// virtaul dom
// component based aracture
// jsx
// one way data binding
// easy to learn

//     //? 4 what is jsx ?

//todo--->> jsx stand for javascript syntax extension it allow tio use html in react .

//     //? 5 what is react fragment ?

// todo --->> fragment is a important feature of react js , it allow to return multiple element from react component , basially react component did not return more then one element with the help of fragment we return multiple element it bind all other element to in one rrot element without add any exxtra node on dom .

//     //? 6 what are the hight order component and its use ?

// todo - -->> high order component is a component which take another component as  arggument and return a component called high order component its manily use when we want to add extra functinility to component 

//     //? 7 what is life-cycle method & its methods ?

// todo--->>  life cycle methods are custom functionility that gets exituted during the diffrent phases of life=cycle , every component have life-cycle , there are 3 main phases mounting , updating , unmounting .

// mounting -->> when component firstily rneder in to dom called mounting a component in this phase react have 4 methods that gets exitued ,
 // 1 constructor 
 // 2 getDrivesStateFromProps
 // 3 render
 // 4 component did mount

 // updating --->> this is the next phase of lif-cycle in which when props and state are changed clled updating in this life-cycle mthod we have 4 methods that get exituted .
 // 1 getDrivedStateFromProps
 // 2 shouldzcomponentUpdate
 // 3 render
 // 4 getSnapSortBeforeUpdate
 // 5 component did uodate

 // unmounting --->> this is the next phase of lifr=cycle it is called ehen component removed from dom in this phase react have only 1 mrhod
 // 1 component will unmount 

//     //? 8 what is component & types of component & what you preffred ?

// todo----->> component indepandent resuable bits of code , that perform ther same functionality as js function , there are 2 types of component function based component , and class based component   . we preftead function based component because tha main diffrence bitween function based component and class component is tha syntax , function component is the simple js object  which tak props as a argument  and return react element , in the ither hand class component need to extend from constructr the apply a retun function and that functin return react elemtnt.

//     //? 9 what is prop-dreling in react ?

// todo---->>>  prop=drealing created when we pass down data through multiple component to reach a component which need to the data  , tere is too complicate to understand and recrafting the application so we use use context or redux .

//     //? 10 what is key in react & use of key & why use key ?

// todo---->>> key is a special attribute in react which include when create list of items , it is used to identify which item change uodate  and delete in to react , it is a identifier , in the absounce of key react rely on other method to find which item change update or delete in the abounse of key .

//     //? 11 can jsx directly read by the web browser ?

// todo==>> jsx does not directly read by web browwser because browser only understnad simple js object but jsx is not simple js oject so  we need to convert them through tjhis we use babal . 

//     //? 12 why use react instends of other framworks ?

//todo-->>>  because react provide many fetures like virtual dom , on way data binding , jsx , easy to lern , component based aracture etc its help to cretae a fast app .

//     //? 13 how react diffrent with angular ?

// todo==>> react cretate by facebook and angular creted by google , react is a js livarary which work in virtual dom and one way data binding , and angular is a js framwork which work on real dom amnd 2 way data binding .

//     //? 14 what is react-router ? is`s work ?

// todo===?>>>> react router is a js library used for routing in reacct application , it create a singla page routing so that user can easily navigate through another page without refresh .

//     //? 15 what is state ?

// todo---->> state is a react object which is used to store component data,

//     //? 16 what is props ?

//todo----??>>> props stand for property ,thais is used to store component data that can be access by there child component .

//     //? 17 diffrence bitween state and props ?

//todo---->>> the main diffrence bitween state and props is that props are read only but state is bith read and write , props a re use to transfer data from parent component to child component  and state is used to handle data inside the component itself .

//     //? 18 what is controled component ?

//todo--- >>> control component is component which control by react state (use state) .

//     //? 19 what is uncontroled component ?

//todo-->> uncontrol component is a component which are control by useref or javascript method called uncontrol component .

//     //? 20 what is statefull component ?

// todo ----->> statefull component are those component which have state object like class based component

//     //? 21 what is stateless component ?  

//todo---->> stateless component are those component whicjh does not have any state object at all , like function based component.

//     //? 22 what is pure compponent diffrence bitween pure and high-order-component ?

//todo ---->> pure component are component which does not rerender when props and state are update with same value called pure component ,  hghr order component are component which take another component as a argument and return a component called high order cvomponent it is mainly use to provide addiditional features in component .

//     //? 23 what is lazy-loading ?

//todo--->> lazy-loading is a most popular method in react js it load component when tay need it instand load everything one time , its improve page spped and band width etc .

//     //? 24 what is error-boundery ?

//todo--->>error boundery is used tpo catch js run time error it return a fallback ui instand of crashed component ,

//     //? 25 what is render ?

//todo---> render is s class based component method which is rensponsible for render ui//.

//     //? 26 what is hooks in react & it`s type explain all with exapmple ?

//todo----->>> hoock are resuable independent bites of code whichaew provide class based component feature in yo function based component ,
// there aee diffrent diffrent types of hook like
// 1 usestate
// 2 useeffect
// 3use layout effect
//4 use ref
//5 use memo
//6 use callback
// 7 use context
//8 use reducer
//9 custom hook

//     //*? 27 what is dom , diffrence bitween virtual dom and real dom ?\

//todo====>>> dom stand for documen tobject modal , through id, class, element,we access dom ,whith the help of js we can access html as weeel as css .

//todo--->> realdom--->> real dom is a actual representantion of web page content , when we update any thing insode real dom then enitire dom refresh so manipulation is slow in real dom due to entire dom refresh frequentily,

//todo---vitual dom --->. virtual dom is a lightweight and viryauly representantion of real dom when state and props are changed recat create a vituasl reprecentation of real dom and compaire bitwwen and change only required chnage in to real dom it is also called reconsilation , in virtual dom manipulation is much faster due to dom does not refresh frequentily . so virtual dom is faster .

//     //? 28 what is reconsiliation ?

//todo---.>. reconsilication is the process in which reac update the dom.

//     //? 29 what are the technologyes used to optimize react app ?

//todo---->>>  there are many techologys use to optimize a react app some are lazy-loding,use memo,image optimization next js etc .

//     //? 30 what is event and synthic event in react ?

//todo--->> event is a type of action that can be trigred by user action called event event are diifrent type like onclikc,onchnage ,onkeypress etc , syntich event are react event react add a wrapper on event to render react event to all browser so bhave same .

//     //? 31 what is unideractional flow ?

//todo--->> react have underatiocial floe in react data flow from prent to child called unf .

//     //? 32 what is flux ?

//todo-->> flux i a state managment librarh which manage state globally it is create by fb in flux we have more then 1 store .

//     //? 33 what is redux ?

//todo---->> redux is a js libarary which is used to mange state globally , it is alos used by angluar , react-redux is a officily used to bindi react and redux .

//     //? 354diffrence bitween redux and context api/use context ?

//todo-->> use context use in the seniro where is state managemtn is not to complicate and state updte is not frequently and redux is used from the sseniro where state managmwnt is to complictate and state updation is frequent . 

//     //? 35 what is middleware ?

//todo-->> midllewer is a like a gatekeeper in redux it stop the action and apply side effects to the action before reaching reducer.

//     //? 36 what is redux and what is redux flow ? explain it ?

//todo--->> rdeux is a opensourec js libaray used to manage state globally .
//todo--->> redux flow refer how redux mange state ad work there few manin stamps like-
// 1 action ---> action is a simple js object which refer the type of action and associate data(payload )
// 2 midlleware--->> midlleware is like a gstkeeper in redux it stop the action before reached reducer and apply some functiliftys .
// 3 reducer---->>> reducer is a pure function which is responsible to update state with the help of action, mins action tels what to do and reducer terls how to do .
// 4 store ------>> store is a simple object which is used to store the state globally .
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
