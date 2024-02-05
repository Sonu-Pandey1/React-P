
//! 1 
// import { Component } from "react";

import { Component, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

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
      {/* <button onClick={()=>{setData(true)}}>show</button> */}
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


// ! 8


