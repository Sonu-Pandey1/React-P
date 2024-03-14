
//! 1 
// import { Component } from "react";

import { Component, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../Reducers";
// import {increment,decrement} from "../Reducerss"
// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { stateContext } from "../App";
// import usecCustom from "../Component/useCustom"
// import {DarkModeContext} from "../context/darkModeContext"
// import { useDispatch, useSelector } from "react-redux";
// import {incNum,decNum} from "../Redux/Actions/Actions"
// import {incNumber,decNumber} from "../Redux/Actions/Actions"
// import {incNumber,decNumber} from "../Redux/Actions/Actions"
import custom from "../Component/useCustom"
import useCustomHook from "../Component/useCustom";
import { counterContext } from "../context/counterContext";
// import useCustom2 from "./useCustom2";
// import counterContext from "../App"
// import {counterContext} from "../App"
// 

//  export default class Peactice extends Component{


//     constructor(){
//         super()
//         this.state={
//             count:0,
//         }
//     }
//     render(){
//         let clickHandller = ()=>{
//             this.setState({count:this.state.count+1})

// }
//         return (
//         <>
//             <h1>{this.props.name}</h1>
//             <h1>{this.state.count}</h1>
//         <button onClick={clickHandller}>counter</button>
//         </>
//         )
//     }
// }

//! 2

// function Practice({name}){




//     const [count,setCount] = useState(0)


//     return(
//         <>
//             <h1>{name}</h1>
//         <h2>{count}</h2>
//         <button onClick={()=>{setCount(count+1)}}>Counter</button>
//         </>
//     )
// }

// export default Practice;

// Practice.defaultProps = {
//   name: "Rahul",
//   eyeColor: "deepblue",
//   age: "45"
// }

// // Practice.propTypes = {
// //   name: PropTypes.number.isRequired
// // };

//! 3

// import React from 'react'

// import { useState } from "react";

// function Practice() {
//     const [data,setData]=useState("true")

//     let handlehide=()=>{
//         setData(false)
// }

// let handleshow=()=>{
//     setData(true)
// }
//   return (
//     <div>
//    { data?<p>hide and show on click</p>: <></>}

//     <button onClick={handlehide}>hide </button>
//     <button onClick={handleshow}>show</button>

//     </div>
//   )
// }

// export default Practice

// ! 4

// function Practice() {
//     const [data,setData]=useState("true")


// let handleshow=()=>{
//     setData(!data)
// }
//   return (
//     <div>
//    { data?<p>hide and show on click</p>: <></>}


//     <button onClick={handleshow}>toggle</button>

//     </div>
//   )
// }

// export default Practice

// ! 5

// import React from 'react'

// function Practice() {
//     const [name,setName] = useState("")
//     const [age,setAge] = useState("")

//    let  handleSubmit =(e)=>{
//     e.preventDefault()
//     console.log(name,age)
//     setAge("")
//     setName("")

//     }
//   return (
//     <div>
//       <form  onSubmit={handleSubmit}>
//         <input type="text" placeholder="enter your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
//         <input type="text" placeholder="your age" value={age} onChange={(e)=>{setAge(e.target.value)}}/><br />
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Practice

// ! 7

// import { Component } from 'react'

// export default class Practice extends Component {
//     constructor(){
//         super()
//         this.state={
//             name:"sonu",
//             counter:0
//         }
//         console.log("constructor is called")
//     }

//     // static getDerivedStateFromProps(props,state){
//     //     state = props
//     //     console.log(state)
//     //     console.log(props)
//     //     return{
//     //         undefined
//     //     }

//     // }

//     componentDidMount(){
//         console.log("component mounted")
//     }

//     componentDidUpdate(preProps,preState){
//         console.log(preProps,preState)
//         // if(preState.counter===10){
//         //     alert("hy")

//         // }
//         console.log("component updated")
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log(nextProps,nextState)
//         if(nextState.counter<=9){
//             return true;
//         }

//     }

//     // getSnapshotBeforeUpdate(preProps,preState){
//     //     console.log("getsnapshotbeforeupdate")
//     //     console.log(preProps,preState)
//     //     return null
//     // }

//     componentWillUnmount(){
//         console.log("component unmounted")
//     }

//     //  static getDerivedStateFromProps(props,state){
//     //     state = props
//     //     console.log(state)
//     //     console.log(props)
//     //     return{
//     //               undefined
//     //              }
//     // }


//   render() {
//     console.log("render is called")

//     let handleClick=()=>{
//         this.setState({counter:this.state.counter+1})
//     }


//     return (
//       <div>

//         <h1>{this.state.counter}</h1>
//         <button onClick={handleClick}>btn</button>

//       </div>
//     )
//   }
// }

//! 8

// import React from 'react'

// function Practice() {
// ! use state
//     const [data,setData] = useState(0)
//     const [dataa,setDataa] = useState(0)
//     const inputRef =useRef()


// ! use ref
// let clickhandler=()=>{
//   console.log("rrrr")
//   inputRef.current.style.color="red"

// }

// const [dataa,setDataa] = useState([])
// console.log(dataa)

// ! use effect
// useEffect(()=>{
//   console.log("component will mount")
//   // let res = fetch("https://jsonplaceholder.typicode.com/posts")
//   let res = fetch("https://dummyjson.com/products")
//   .then((res)=>{
//     return res.json()
//   }).then((ress)=>{
//     console.log(ress)
//     // setDataa(ress.products)
//   }).catch((err)=>{
//     console.log(err)
//   })


// },[])

//! use layouteffect
// useLayoutEffect(()=>{
//   console.log("copmonrnt")
//   let res = fetch("https://dummyjson.com/products")
//       .then((res)=>{
//         return res.json()
//       }).then((ress)=>{
//         console.log(ress)
//         // setDataa(ress.products)
//       }).catch((err)=>{
//         console.log(err)
//       })
// })

// ! use memo

// const computeExpensiveValue = (num) => {
//   console.log("Computing...");
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//       result += num;
//   }
//   return result;
// };

// const result = computeExpensiveValue(data);
// const result = useMemo(()=>{result},[result])
// const result = useMemo(() => computeExpensiveValue(data), [data]);

// ! use callback

// ! custom hook

//! use context

// return (
//   <div>
//     <h1>hooks</h1>
//     <ul>

{/* {dataa.map(item => (
        <li key={item.id}>{item.title}</li>
      ))} */}

// </ul>
{/* {dataa.map((i)=>{
      console.log(i)
     })} */}

//       <h2>{data}</h2>
//       <h2>{dataa}</h2>
//       {/* <p>{result}</p> */}
//       <input ref={inputRef} type="text" />
//       <button onClick={()=>{setData(data+1)}}>update</button>
//       <button onClick={()=>{setDataa(dataa+1)}} >update 2 use memo</button>
//     </div>
//   )
// }

// export default Practice;


// ! 9

// // import React from 'react'

// function Practice({fun}) {
//   console.log(fun)

//   const [value,setvalue] = useState("sonu")

//   let funn =()=>{
//     fun(value)
//   }

//   return (
//     <div>
//       <h1>lifting state up</h1>
//       <button onClick={funn}>btn</button>
//     </div>
//   )
// }

// export default Practice

// ! 10

// import React from 'react'

// function Practice() {
//   return (
//     <div>
//       <h1>high order component  </h1>
//     </div>
//   )
// }

// export default Practice

// ! 11

// import React from 'react'

// function Practice() {
//   const [data,setData] = useState(0)
//   let [data2,setData2] = useState(0)

//   let btnHandler=()=>{
//     setData((prevalue)=>{
//        setData2(data2=prevalue)
//       return data+1
//     })
//   }
//   return (
//     <div>
//       <h1>get prev state in fun b c</h1>
//       <h5>{data}</h5>
//       <h6>previous value ,{data2}</h6>
//       <button onClick={btnHandler}>btn</button>
//     </div>
//   )
// }

// export default Practice


// ! 12


// function Practice({counter}) {

//     const lastval = useRef()
//     useEffect(()=>{
//         lastval.current = counter
//     })
//     let previousProps = lastval.current
//     return(
//         <>
//             <h1>hy {counter}</h1>
//             <h1>{previousProps}</h1>
//         </>
//     )
// }

// export default Practice


// ! 13

// // import React from 'react'

// function Practice() {
//   const [name,setName] = useState({name:"sonu",age:123})
//   // const [password,setPassword] = useState({password:123,state:"up"})

//   // useEffect(()=>{
//   //   console.log(name,password)
//   // },[name,password])
//     return (
//     <div>
//       <h1>13</h1>
//       <input type="text" placeholder="name" onChange={(e)=>{setName({...name,name:e.target.value})}} />
//         <input type="text" placeholder="password" onChange={(e)=>{setName({...name,age:e.target.value})}}  />
//       <p>{name.name}</p>
//       <p>{name.age}</p>
//       {/* <p>{password.password}</p> */}

//     </div>
//   )
// }

// export default Practice



// ! 1

// import React, { Component } from 'react'

// export default class Practice extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name:1
//     }

//   }

//   render() {

//     return (
//       <div>
//         <h1>ram , {this.state.name}</h1>
//         <h1>{this.props.str}</h1>
//         <button onClick={()=>{this.setState({name:this.state.name+1})}}>btn</button>
//       </div>
//     )
//   }
// }

// ! 2

// import React from 'react'


// function Practice(props) {
//   const name= props.name
//   const [count,setCount] =useState(0);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{count}</h2>
//       <button onClick={()=>{setCount(count+1)}}>btn</button>
//     </div>
//   )
// }

// export default Practice

// Practice.defaultProps = {
//   name:"sonu"
// }


// ! 3

// import React from 'react'

// export default function Practice() {
//   const [data,setData] = useState(true)
//   return (
//     <div>
//       {data?<h1>ram</h1>:""}
//       <button onClick={()=>{setData(false)}}>hide</button>
//       <button onClick={()=>{setData(true)}}>show</button>
//     </div>
//   )
// }

// ! 4

// export default function Practice() {
//   const [data,setData] = useState(true)
//   return (
//     <div>
//       {data?<h1>ram</h1>:""}
//       {/* <button onClick={()=>{setData(!data)}}>toggle</button> */}
{/* <button onClick={()=>{setData(true)}}>show</button> */ }
//     </div>
//   )
// }

// ! 5

// import React from 'react'

// function Practice() {

//   const [name,setName] = useState("");
//   const [password,setPassword] = useState("");

//   let bb = (e)=>{
//     e.preventDefault();
//     console.log(name,password);
//     setName("")
//     setPassword("")


//   }

//   return (
//     <div>
//       <h1>ram</h1>
//       <form  >
//         <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
//         <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//         <button type="submit" onClick={bb} >submit</button>
//       </form>
//     </div>
//   )
// }

// export default Practice

// ! 7

// export default class Practice extends  Component{
//   constructor(){
//     super()
//     this.state={
//       name:"sonu pandey",
//       count:0
//     }
//     console.log("constructoe called")

//   }

// static getDerivedStateFromProps(props,state){
//   state = props
//   console.log(state)
//   console.log(props)
//   return{
//     undefined
//   }


//   // }
//   componentDidMount(){

//     console.log("component mounted")

//   }

//   // shouldComponentUpdate(nextProps,nextState){
//   //   console.log("component should update")
//   // if(nextState.count<10){
//   // return (
//   //   true
//   // )}
//   // }\

//   componentDidUpdate(nextProps,nextState){
//     console.log("component updaTED")
//     console.log(nextState)
//   }

//   // getSnapshotBeforeUpdate(preProps,preState){
//   //   console.log(preState)
//   //   console.log("KK")
//   //   return{
//   //     undefined
//   //   }

//   // }

//   componentWillUnmount(){
//     console.log("component unmounted")
//   }


//   render(){
//     console.log("render called")
//     return(
//       <>
//         {/* <h1>{this.props.name}</h1> */}
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>btn</button>
//       </>
//     )
//   }
// }


// ! 9

// export default function Practice ({fun}){
//   return(
//     <>
//       <h1>ram {fun("g")}</h1>
//     </>
//   )
// }

// ! 10

// export default function Practice(){
//   return(
//     <>
//       <h1>ram</h1>
//     </>
//   )
// }


// ! 11

// function Practice (){


// let handleCounter = ()=>{
// console.log(prevalue)


// setCounter((da)=>{
//   console.log(da)
//   return counter+1
// })

// }


//   return(
//     <>
//       <h1>ram</h1>
//       <p>{counter}</p>
//       <button onClick={handleCounter}>btn</button>
//     </>
//   )
// }
// export default Practice

// ! 12

// import React from 'react'

// function Practice({cmd}) {
//   const lastVal = useRef()

//   let hh = ()=>{
//     console.log("rrrrrrr")
//     // lastVal.current.style.Color = "red"
//     lastVal.current.style.color="red"
//   }


// useEffect (()=>{
//   lastVal.current = cmd

// })

// return (
//     <div>
//       <h1>ram { cmd}</h1>
//       <p>{lastVal.current}</p>
//       <input ref={lastVal} type="text" placeholder="name" />
//       <button onClick={hh}>onclik</button>
//       {/* <button onClick={()=>{cmd+1}}>btn</button> */}
//     </div>
//   )
// }

// export default Practice

// ! 13

// import React from 'react'

// function Practice() {
//   const [data,setData] = useState({name:"sonu",age:23})
//   return (
//     <div>
//     <input type="text" placeholder="name"  onChange={(e)=>{setData({...data,name: e.target.value})}} />
//     <input type="text" placeholder="age" onChange={(e)=>{setData( {...data,age:e.target.value})}} />
//       <h1>{data.name}</h1>
//       <h1>{data.age}</h1>
//     </div>
//   )
// }

// export default Practice

// ! 14

// import React from 'react'
// import {darkMode} from "./useCustom"
// import {lightContext} from "../App"

// let initialState = 0

// const reducer =(state,action)=>{
//   if(action.type ==="INCREMENT"){
//     console.log(state,action.type)
//     return state+1;
//   }
//   else{
//     console.log(state,action.type)
//     return state-1

//   }

// }

// function Practice() {
//   const [counter1,setCounter1] = useState(0)
//   const [counter2,setCounter2] = useState(10)

//   // ! uselayouteffect

//   // useLayoutEffect(()=>{
//   //   console.log("g")
//   // })
//   // useEffect(()=>{
//   //   console.log("component mounted")
//   // })

//   // ! custom hhook
//   // let ramm = usecCustom()

//   // ! use memo
//   let count2 = ()=>{
//     // let i = 1;
//     // for(i=0;i<+10000; i++){
//     //   console.log(i)
//     // }

//     setCounter2(counter2+1)
//   }
//   let ifeven = ()=>{
//     if(counter2%2===0){
//       return"even"
//     }
//     else{
//       return "odd"
//     }
//   }

//   let multicount = useMemo(()=>{
//     console.log("multicount called")
//     return counter2*5
//   },[counter2])
//   // ! use context
//   const dark = useContext(darkMode)
//   console.log(dark)

//   // const light = useContext(lightContext)
//   // console.log(light)




//   // ! useReducer
//   const [state,dispatch] = useReducer(reducer,initialState)

//   return (
//     <div>
//     <h1>ram</h1>

//     {/* <div>{ramm}</div>  */}
//     <p>{counter1}</p>
//     <p>{counter2}</p>
//     {ifeven()}
//     {multicount}<br/>
//     {state}
//     <button onClick={()=>{setCounter1(counter1+1)}}>counter1</button>
//     <button onClick={count2}>counter2</button>
//     <button onClick={()=>{dispatch({type:"INCREMENT"})}}>inc</button>
//     <button onClick={()=>{dispatch({type:"DECREMENT"})}}>dec</button>


//     </div>
//   )
// }

// export default Practice

// ! 15

// import React from 'react'




// function Practice() {
//   const { darkMode, dispatch } = useContext(DarkModeContext);
//   console.log(darkMode)
//   // const {state,dispatch}  = useContext(stateContext)
//   // console.log(tyi)
//   // const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <div>
//       <h1>ram</h1>

//       <h2>{darkMode}</h2>
//       {/* <button onClick={()=>{dispatch({type:"INCREMENT"})}} >btn</button>
//       <button onClick={()=>{dispatch({type:"DECREMENT"})}} >btn</button> */}
//       <button onClick={()=> dispatch({type:"TOGGLE"})} >themChanger</button>
//       {/* <button onClick={()=>{dispatch({type:"Light"})}}>light</button> */}
//     </div>
//   )
// }

// export default Practice

// ! 15

// import React from 'react'

// function Practice({mode,toggler}) {
//   console.log(mode)
//   return (
//     <div>
//       <h1>ram</h1>
//       <button >DarkMode</button>
//       <button onClick={()=>{toggler()}}>LightMode</button>
//     </div>
//   )
// }

// export default Practice

// ! 13

// import React from 'react'
// import {ThemChangerContext} from "../context/themChangerContext"

// function Practice() {
//   const {dispatch,state} =useContext(ThemChangerContext)
//   return (
//     <div>
//       <h1>ramg</h1>
//       <h1>{state}</h1>
//       <button onClick={()=>{dispatch({type:"Dark"})}}>darkThemCHanger</button>
//       <button onClick={()=>{dispatch({type:"Light"})}}>lightThemCHanger</button>
//     </div>
//   )
// }

// export default Practice

// ! 14

// import React from 'react'

// function Practice() {
//   let myState = useSelector((state) => state.changetheNumber);
//   console.log(myState)
//   let dispatch = useDispatch()

//   return (
//     <div>
//       <h1>ramg</h1>
//       <h2>{myState}</h2>
//       <button onClick={()=>dispatch(incNum())}>+</button>
//       <button onClick={() => { dispatch(decNum()) }}>-</button>
//     </div>
//   )
// }

// export default Practice

// ! 14 //1

// import React from 'react'

// function Practice() {
//   const Count = useSelector((state) => state.changeTheNumber)
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <h1>raamg</h1>
//       <h2>{Count}</h2>
//       <button onClick={()=> dispatch(incNumber())}>Increment</button>
//       <button onClick={()=> dispatch(decNumber())}>Decrement</button>
//     </div>
//   )
// }

// export default Practice

// ! 14

// import React from 'react'
// import {ThemChangeContext} from "../context/themChangeContext"
// function Practice() {
//   const {state,dispatch}  = useContext(ThemChangeContext)
//   console.log(state.darkMode)

//   let darkModeF = ()=>{
//     dispatch({type:"Dark"})
//     // document.body.style.backgroundColor = "black"

//   }

//   let lightModeF = ()=>{
//     dispatch({type:"Light"})
//     // document.body.style.backgroundColor = ""


//   }
//   return (
//     <div>
//       <h1>ramg</h1>
//       {/* <h1>{state.darkMode}</h1> */}
//       <button onClick={darkModeF}>darkMode</button>
//       <button onClick={lightModeF}>LightMode</button>
//     </div>
//   )
// }

// export default Practice

// ! 15

// import React from 'react'

// function Practice() {
//   let myState = useSelector((state)=> state.changeTheNumber)
//   let dispatch = useDispatch()
//   return (
//     <div>
//       <h1>ramg</h1>
//       <h1>{myState}</h1>
//       <button onClick={()=>{dispatch(incNumber())}}>Increment</button>
//       <button onClick={()=>{dispatch(decNumber())}}>Decrement</button>

//     </div>
//   )
// }

// export default Practice

// ! 16

// import React from 'react'

// function Practice() {
//   let {c} = useSelector((state)=> state.custom)
//   let dispatch = useDispatch()
//   return (
//     <div>
//       <h1>ramg</h1>
//       <h3>{c}</h3>
//       <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
//       <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
//     </div>
//   )
// }

// export default Practice

// ! 16

// import React from 'react'

// function Practice() {

//   let {c} = useSelector((state)=> state.custom )
//   let dispatch = useDispatch()


//   const handleIncrement = () => {
//     dispatch(increment());
// };

// const handleDecrement = () => {
//     dispatch(decrement());
// };

//   return (
//     <div>
//       <h1>ramg</h1>
//       <h1>{c}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }

// export default Practice
// 


//! 13/02/2024

// ! 1

// export default class Practice extends Component{
//   constructor(){
//     super();
//     this.state = {
//       fname : "khushi",
//     }
//   }
//   render(){
//     return(
//       <>
//         <h1>jay shree {this.props.name}</h1>
//         <p>{this.state.fname}</p>
//       </>
//     )
//   }

// }

// ! 2

// export default function Practice(props){
//   const {fname} = props
//   const [name,setName] = useState("ramg")
//   return(
//     <>
//       <h1>jay shree {fname}</h1>
//       <p>{name}</p>
//     </>
//   )
// }

// ! 3

// export default function Practice(){
//   const [value,setValue] = useState(true)
//   return(
//     <>
//       {value?<h1>ram</h1>:""}
//       <button onClick={()=>{setValue(true)}}>show</button>
//       <button onClick={()=>{setValue(false)}}>hide</button>
//     </>
//   )
// }

// ! 4

// export default function Practice(){
//   const [value,setValue] = useState(true)
//   return(
//     <>
//       {value?<h1>ram</h1>:""}
//       <button onClick={()=>{setValue(!value)}}>toggle</button>
//       {/* <button onClick={()=>{setValue(false)}}>hide</button> */}
//     </>
//   )
// }

// ! 5

// export default function Practice(){
//   const [data,setData] = useState({
//     name:"",
//     password:""
//   })

//   let submitHandller = (e)=>{
//     e.preventDefault();
//     console.log(data)
//     setData({
//       name:"",
//       password:""
//     })

//   }
//   return(
//     <>
//       <h1>ramg</h1>
//       <h6>{data.name}</h6>
//       <h6>{data.password}</h6>
//       <form >
//         <input type="text" value={data.name} placeholder="name" onChange={(e)=>{setData({...data,name:e.target.value})}} />
//         <input type="text" value={data.password} placeholder="password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
//         <button type="submit" onClick={submitHandller}>submit</button>
//       </form>
//     </>
//   )
// }

// ! 7

// export default class Practice extends Component{
//   constructor(){
//     super();
//     this.state = {
//       counter : 0
//     }
//     console.log("constructor is called")
//   }

//   // static getDerivedStateFromProps(state,props){
//   //   console.log("getDerivedStateFromProps is called")
//   //   console.log(state,props)
//   //   state = props
//   //   console.log(state,props)
//   //   return(
//   //     null
//   //   )

//   // }

//   componentDidMount(){
//     console.log("component mounted")
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     if(nextState.counter<=10){
//       console.log(nextState)
//       return(
//       true
//     )
//     }
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     console.log(nextState)
//     return(
//       true
//     )

//   }

//   componentWillUnmount(){
//     console.log("khatam")
//   }

//   componentDidUpdate(){
//     console.log("component updated")
//     // console.log(prevState)
//   }


//   render(){
//     console.log("render is callled")
//     return(
//       <>
//         <h1>ram g</h1>
//         {this.state.counter}
//         <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>btn</button>
//       </>
//     )
//   }
// }

// ! 8

// export default function Practice({fun}){
//   // let name = "sonu"
//   return(
//     <>
//       <h1>ram g {fun(name)}</h1>
//     </>
//   )
// }
// export default function Practice({fun}) {
//   console.log(fun)

//   const [value,setvalue] = useState("sonu")

//   let funn =()=>{
//     fun(value)
//   }

//   return (
//     <div>
//       <h1>lifting state up</h1>
//       <button onClick={funn}>btn</button>
//     </div>
//   )
// }


// ! 9

// export default function Practice(){
//   return(
//     <>
//       <h1>ram g // high order com</h1>
//       <p>jay ho</p>
//     </>
//   )
// }

// ! 10

// export default function Practice(){
//   const [data,setData] = useState(0)

//   let handleBtn = ()=>{
//     setData((prevState)=>{
//       console.log(prevState)
//       return data+1
//     })
//   }


//   return(
//     <>
//       <h1>ram</h1>
//       {data}
//       <button onClick={()=>{handleBtn()}}>btn</button>
//     </>
//   )
// }

// ! 11

// import React from 'react'

// function Practice({counter}) {
//   const previous = useRef()
//   useEffect(()=>{
//     previous.current = counter
//   })
//   let previousValue = previous.current

//   return (
//     <div>
//       <h1>jay shri ram</h1>
//       <p>{counter}</p>
//       <p> previous value : -{previousValue}</p>

//     </div>
//   )
// }

// export default Practice

// ! 12

// import React from 'react'

// function Practice() {
//   const [name,setName] = useState({
//     name:"sonu",
//     password:"pandey"
//   })

//   return (
//     <div>
//       <h1>jay shree ram</h1>
//       <p>{name.name}</p>
//       <p>{name.password}</p>

//       <input type="text" placeholder="name" onChange={(e)=>{setName({...name,name:e.target.value})}} />
//       <input type="text" placeholder="password" onChange={(e)=>{setName({...name,password:e.target.value})}}/>

//     </div>
//   )
// }

// export default Practice

// ! 13

// import React from 'react'
// let initialState = 0

// let reducer = (state,action)=>{
//     switch(action.type){
//       case "INCREMENT":
//         return state+1;

//       case "DECREMENT":
//         return state-1

//       default :
//       return state;
//     }

//   }

// function Practice() {
//! use state -c
//! use effect -c
// useEffect(()=>{
//   console.log("component render")
// })
//! use ref -c 
// let inputRef = useRef()
// let inputHndller = ()=>{
//   inputRef.current.style.backgroundColor = "red"
//   inputRef.current.style.border = "3px solid green"
// }
// ! use layout effect -c
// useLayoutEffect(()=>{
//   console.log("render before component render")
// })
// ! use memo -c
// const [count1, setCount1] = useState(0)
// const [count2, setCount2] = useState(10)
// let counter1Hnadler = () => {
//   console.log("counter 1 clicked")
//   setCount1(count1 + 1)
// }

// let counterHnadler = useMemo(() => {
//   console.log("count clicked")
//   return count1 * 2
// }, [count1])


// let counter2Hnadler = () => {
//   console.log("count 2 clicked")
//   setCount2(count2 + 1)
// }

// ! use callback-nc
// ! custom hook -c
// const [counter,increment,decrement] = useCustomHook()
// let g = counter
// console.log(g)

// ! use reducer -c
// const [state,dispatch]  = useReducer(reducer,initialState)



// ! use context -c
// const counter = useContext(counterContext)
// const {state,dispatch} = useContext(counterContext)



// return (
//   <div>
{/* <h1>jay shri ram</h1> */ }
{/* <p>{counter}</p> */ }
{/* <p>{state}</p> */ }
{/* <p> {custom()}</p> */ }
{/* <p>count 1---{count1}</p> */ }
{/* <p>{counterHnadler}</p> */ }
{/* <p>count 2 ----{count2}</p>
     
      {/* <input ref={inputRef} type="text" placeholder="name" />
      <button onClick={inputHndller}>btn</button> */}
{/* <p>{counter}</p> */ }
{/* <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
      <button onClick={()=>{dispatch({type:"decrement"})}}>-</button> */}
{/* <button onClick={decrement}>-</button> */ }
{/* </div> */ }
{/* )
} */}

{/* export default Practice */ }

// ! 14

// import React from 'react'

// function Practice() {
//   const {state,dispetch} = useContext(counterContext)
//   return (
//     <div>
//       <h1>both</h1>
//       <p>{state}</p>
//       <button onClick={()=>{dispetch({type:"INCREMENT"})}}>increment</button>
//       <button onClick={()=>{dispetch({type:"DECREMENT"})}}>decrement</button>
//     </div>
//   )
// }

// export default Practice

// ! 15

// import React from 'react'


// function Practice() {
//   const myState = useSelector((state)=> state.custom)
//   const dispatch  = useDispatch()
//   return (
//     <div>
//       <h1>simple redux</h1>
//       <p>{myState}</p>
//       <button onClick={()=>{dispatch(increment)}}>increment</button>
//       <button onClick={()=>{dispatch(decrement)}}>decrement</button>
//     </div>
//   )
// }

// export default Practice

// ! 16

// import React from 'react'

// function Practice() {
//   const {c} = useSelector((state)=> state.custom)
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <h1>reduc toolkit</h1>
//       <p>{c}</p>
//       <button onClick={()=>{dispatch(increment())}}>+</button>
//       <button onClick={()=>{dispatch(decrement())}}>-</button>
//     </div>
//   )
// }

// export default Practice


// 12/03/2024

//! 1 


// export default class Practice extends Component{
//   constructor(){
//     super();
//     this.state={
//       count:0,
//     }
//   }

//   render(){
//     // console.log()
//     return(
//       <>
//         <h1>ram g {this.props.cont}</h1>
//         <p>{this.state.count}</p>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>btn</button>
//       </>
//     )
//   }
// }

//! 2

// export default function Practice ({cont}){
//   let [counter,setCounter] = useState(0);

//   return(
//     <>
//       <h1>ram g {cont}</h1>
//       <p>{counter}</p>
//       <button onClick={()=>{setCounter(counter = counter+1)}}>btn</button>
//     </>
//   )
// }

//! 3

// // import React from 'react'

// function Practice() {
//   let [show,setShow] = useState(true)


//   let handelShow = ()=>{
//     setShow(show = true)

//   }
//   let handelHide = ()=>{
//     setShow(show = false)

//   }
//   return (
//     <div>
//       {show===true ? <h1>show & hide h1 on click </h1>:""}
//       <button onClick={handelShow}>show</button>
//       <button onClick={handelHide}>hide</button>
//     </div>
//   )
// }

// export default Practice

// ! 4 

// import React from 'react'

// function Practice() {
//   let [data,setData] = useState(true)
//   return (
//     <div>
//       {data?<h1>ram g </h1>:""}
//       <button onClick={()=>{setData(!data)}}>toggle</button>
//     </div>
//   )
// }

// export default Practice

// ! 5

// import React from 'react'

// function Practice() {
  // let [name,setName] = useState("")
  // let [password,setPassword] = useState("")
//   let [data,setData] = useState({name:"",password:""})

//   let handleSubmit =(e)=>{
//     e.preventDefault();
//     console.log(data.name)
//     console.log(data.password)
    

//   }
//   return (
//     <div>
//       <h1> radharani g ki jay</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="enter you name" onChange={(e)=>{setData({...data, name:e.target.value})}} /><br />
//         <input type="text" placeholder="enter you password"onChange={(e)=>{setData({...data ,password:e.target.value})}} /><br /><br />
//         <button type="submit">submit</button><br /><br />
//       </form>
//     </div>
//   )
// }

// export default Practice

// ! 7

// class Practice extends Component{
//   constructor(){
//     console.log("constructor is called")
//     super();
//     this.state={
//       count:0,

//     }
//   }

// static getDerivedStateFromProps(props,state){
//   console.log("getDrivedstate =frompropss is called")
//   console.log(state)
//   console.log(props)
//   state = props
//   console.log(state)
//   console.log(props)
//   return(
//     null
//   )
// }



// componentDidMount(){
//   console.log("component mounted")
// }

// shouldComponentUpdate(nextProps,nextState){
//   console.log("should component is called ") 
//   if(nextState.count<10){
//     console.log(nextState)
//     return (
//       true
//       )
//   }
// }

// getSnapshotBeforeUpdate(preProps,preState){
//   console.log(preState)
//   if(preState.count<10){
//     // console.log(preState)
//     return true
//   }
// }

// componentDidUpdate(preProps,preState){

//   console.log("component updated")
//   console.log(preState)
// }

// componentWillUnmount(){
//   console.log("katam")
// }



//   render() {
//     console.log("render is called")
//     return(
//       <>
//         <h1>radharani ki jay</h1>
//         <p>{this.state.count}</p>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>btn</button>
//       </>
//     )
//   }
// }

// export default Practice;

//! 8

// import React from 'react'

// function Practice({fun}) {
//   let name = "sonu"

//   let handlSubmit = ()=>{
//     fun(name)

//   }
//   return (
//     <div>
    
//       <h1> jay shri Krishna </h1>
//       {/* <p>{fun(name)}</p> */}
//       <button onClick={handlSubmit}>submit</button>


//     </div>
//   )
// }

// export default Practice

//! 9 

// import React from 'react'

// function Practice() {
//   return (
//     <div>
//       <h1>bankebihari g ki jay</h1>
//     </div>
//   )
// }

// export default Practice

// ! 10

// import React from 'react'

// function Practice() {
//   let [counter,setCounter] =useState=(0)

//   let handleBtn = ()=>{
//     setCounter(counter=counter+1)
    
//   }
//   return (
//     <div>
//       <h1>jay bajrangbali </h1>
//       <p>{counter}</p>
//       <button onClick={handleBtn}>btn</button>
//     </div>
//   )
// }

// export default Practice
// export default function Practice (){
//   let [counter,setCounter] = useState(0);

//   let handleBtn = ()=>{
//     setCounter((preval)=>{
//       console.log(preval)
//       return counter+1
//     })
//   }

//   return(
//     <>
//       {/* <h1>ram g {cont}</h1> */}
//       <p>{counter}</p>
//       <button onClick={handleBtn}>btn</button>
//     </>
//   )
// }

// ! 11

// import React from 'react'

// function Practice({counter}) {
//   let lastVal = useRef()
//   useEffect(()=>{
//     lastVal.current = counter
//   })
//   return (
//     <div>
//       <h1>jay shree ram</h1>
//       <p>{counter}</p>
//       <p>{lastVal.current}</p>
//     </div>
//   )
// }

// export default Practice

// ! 12

// import React from 'react'

// function Practice() {
//   let [data,setData] = useState({name:"sonu",password:"pandey"})
//   return (
//     <div>
//       <h1>ram</h1>
//       <input type="text" placeholder=" name" onChange={(e)=>{setData({...data ,name:e.target.value})}} /><br/>
//       <input type="text" placeholder=" password"  onChange={(e)=>{setData({...data ,password:e.target.value})}} />
//       <p>{data.name}</p>
//       <p>{data.password}</p>
//     </div>
//   )
// }

// export default Practice


// ! 13

// import React from 'react'

function Practice() {
  // let inputRef = useRef()

  // useLayoutEffect(()=>{
  //   console.log("layout effect called")
  // })

  // useEffect(()=>{
  //   console.log("component mounted")
  // })

  //! useMemo 
  // let [count1,setCount1] = useState(0)
  // let [count2,setCount2] = useState(0)

  // let btnHandller1 = ()=>{
  //   setCount1(count1=count1+1)
  // }

  // let btnHandller2 = ()=>{
  //   setCount2(count2=count2+1)
  // }

  // let btnHandller3 = useMemo(()=>{
  //   console.log("btnhasler 3 is called")
  //   return count1*5
  // },[count1])

  // ! use ref
  // let btnHandller = ()=>{
  //   console.log("btn clicked")
  //   inputRef.current.style.backgroundColor = "red"
  // }

  // ! use reducer

// ! custom component 

// ! use context

  return (
    <div>
    <h1> jai siyaram</h1>
    {/* <input ref={inputRef} type="text" placeholder="name" /><br /> */}
    {/* <button onClick={()=>{btnHandller()}}>btn</button> */}
    {/* <p>{count1}</p>
    <p>{count2}</p>
    <p>{btnHandller3}</p>
    <button onClick={()=>{btnHandller1()}}>counter 1</button>
    <button onClick={()=>{btnHandller2()}}>counter 2</button> */}
      
    </div>
  )
}

export default Practice









