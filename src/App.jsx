
// import { useState } from 'react'
// import {   useState } from 'react'
import { createContext, useReducer, useState } from 'react'
import './App.css'
import Practice from './Component/Practice'

// let context = createContext()

// const lightContext = createContext()


// const stateContext  = createContext()

// const reducer = (state,action)=>{

//     switch(action.type){
//       case "INCREMENT":
//         return state = state+1
      
//       case "DECREMENT" :
//         return state-1
      
//       default:
//         return state;
//     }
  
//   }



function App() {

    // const [mode,setMode] = useState("light")

    // let toggler = ()=>{
    //     if(mode==="light"){
    //         setMode("dark")
    //         // console.log(mode)
    //         document.body.style.backgroundColor = "red"
    //     }
    //     else{
    //         setMode("light")
    //         document.body.style.backgroundColor = ""
    //     }
    // }

    // let initialState = 0

    // const [state,dispatch]  = useReducer(reducer,initialState)
    // const [data,setData] = useState(true);
    // const [counter, setCounter] = useState(0)




    // let funi = (num)=>{
    //   console.log(num)
    // }

    // let HOCRed = ({cmd})=>{
    //   return(
    //     <div style={{backgroundColor:"red"}}>{cmd}</div>
    //   )

    // }
    // let HOCBlue = ({cmd})=>{
    //   return(
    //     <div style={{backgroundColor:"blue"}}>{cmd}</div>
    //   )

    // }


    return (


        <>
            {/* 1 times compl*/}
            {/* 2 */}

            {/* //! notebook Questions ----------

    //? 1 what is react & why is so popular  ?

    //todo--> react is most popular open-soures free and demanding javascript fornt end livarary , which is used to create intractive dyanamic intrefaces .
    it s is popuar because its work on component based aracture which make complaxe interface to simple and resuable and ists also work on virtual dom so is make react faster any ohthers .


    //? 2 what is features of react js ?

    //todo--> there are many fetures in reac some are -->
    1 easy to learn
    2 jsx
    3 virtual dom
    4 one-way data binding
    5 component based aracture etc.

    //? 4 what is jsx ?

    //todo--> jsx stand for javascript syntax extension , its allow to use html in react .



    //? 5 what is react fragment ?

    //todo ---> react fragment is a most important method in js which help to return multiple element from the component by binding all the element to root element and it is not add any extra element to the dom 



    //? 6 what are the hight order component and its use ?

    //todo---->> high order component are the component which take a component as a argument and return a component called high-order component it allow to resuse a component logic to multiple component .



    //? 7 what is life-cycle method & its methods ?


    //todo-->> lifycycle methods are custom functionlity which is exituted when a component render to dom , each component have lifecycle methods which are run during diffrent phases of life-cycle , there are 3 phase of life-cycle methods , mounting,updating,unmounting .

    1 mounting ---->> mounting mins when component puts in to dom , in this phase react have 4 build-in methods thats get exiuted when component mounted .
    1 construstor
    2 getDrivedStateFromProps
    3 render
    4 componentDidMount

    2 updating--->> updating happen when there is changes in life-cycle methods state and props , in this phase react have 5 build-in methods which are exituted when component are updated .
    1 getDriveStateFromProps
    2 shouldComponentUpdate
    3 render
    4 getSnapshotBeforeUpdate
    5 component did update

    3 unmounting --->> unmounting happen when a component remove from the dom , in this phase react have only 1 life-cycle method which is run when component unmounted .
    1 componentWillUnmount

   

    //? 8 what is component & types of component & what you preffred ?

    //todo--->> component is a resuable indipendant bites of code , thay perform same functionlity as a javascript function but work in isolation , there are 2 tpye of component , function based component , class based component , we prefread function based component becase of syntax , 
    function based component is a plan javascript object which take a parameter and return a elemtnt.
    class basec component is need to extand from component and the n create a render method ehich return element . 


    //? 9 what is prop-dreling in react ?

    //todo---> props-drealing accors when we need to pass down data through multiple componet to reach one component that is needed in this proceess we pass the data through multiple component even that are not need it , in this situation there is dificult to manage state and recfactour our app . its called prop-drealing . 
    avoid this situation we use use context ,redux which is manage state globally , so which component needed data access directly from the store , there is very easy to mage state and refacture our app .
  


    //? 10 what is key in react & use of key & why use key ?

    // todo---> key is a special attribute which is include when create  a list of elements. it is use to identifi which element chane,update,and remove , it is is provide an identiy of elements ,
    if there is no kys in  then react app depend on other methods thet can be a lead issue and a bug so we avoid and use key.

    //? 11 can jsx directly read by the web browser ?

    //todo---> jsx does not read directly by the web browser  because that build in to read simple js objct but jsx is not a js simple oject so we need to transform jsx to normal object through babal we did it .


    //? 12 why use react instends of other framworks ?

    //todo-->> we use react instand other framworks due to ists assiential fetures like virtal dom , component basd arcture , jsx make its faster and easy to use , in react you can break a complax user interfasr in to smaller and resualbel parts .

    //? 13 how react diffrent with angular ?

    react is a javascript livary  and angular is a frontenf frmawork  react is use one-waydata binding and v dom and angular is used to real dom and two-data binding  react created by fb and angular creted by google.etc.

    


    //? 14 what is react-router ? is`s work ?

    //todo-->> react-router is a routing liobaray which is used to navigate in site its create single page based routing ,

   

    //? 15 what is state ?

    //todo--->> state is a js object which is used to store information about the component , 



    //? 16 what is props ?

    //todo-->> props stand for propertys it used to store the data can be assec by its children.



    //? 17 diffrence bitween state and props ?

    //todo---> the main diffrence between sate and props is that props are reed only and state are both read and wright , prips are used to transfer data one component to anothe component and state is used to handle data inside the component itself.


    //? 18 what is controled component ?

    //todo--> which component form data are handel through use sate mins in which component form data is handle by the sate called controll component 



    //? 19 what is uncontroled component ?

    which component form data handle by javascript or use ref  called uncontrol component 

 


    //? 20 what is statefull component ?

    which component have state object at all called statefull component like class based components

    


    //? 21 what is stateless component ?

    whixh component have not a state object called stateless component 



    //? 22 what is pure compponent diffrence bitween pure and high-order-component ?

   // todo--> pure component are component that does nor re-render when staTE AND PROPS are update with the same value .
   high-order is component which take a component as a argument and return a component , it use when we have a component logic and we want to use them multiple time .


    //? 23 what is lazy-loading ?

    //todo--> lazy-loding is a javscript most popular method which is allow to load a component when thay need instand load everything togather , its incerease page speed ,descrease bandwidth .



    //? 24 what is error-boundery ?

    //todo-->> error boundery is a javscript class based component which is used to handle js run time errors , its provide a fallback ui instand of a component that cureshed.


    //? 25 what is render ?

    // render is a claas based component which is used to render the ui .



    //? 26 what is hooks in react & it`s type explain all with exapmple ?

    //todo-->>hooks are the resuable bites of code that provide class based component feature in function based component .
    there are many tipe of hooks like-->
    1 use state--> use sate is used to track state in component .
    2 use efferct--> use effect is used to  perform side effect in component .
    3 use ref-->> use ref is used to get a muteable value , nd also use to access dom directly .
    4 use layout effect--->> is use to perform any task before render 
    5 use memo-->> use memo is return memoize value , its mean that we can not need to reculate any operation at every render.
    6 use callback-->>is return a momize callback function , 
    7 use reducer-->> is same as s=use sate its use to mabage state same time diffrent diffrent place 
    8 use context-->> is used to manage state globally
    9 custom hook-->> hhoks are resuable bits of code , if we have a component logic that need by other component also then we put thsis logic in to custom hhooks an use it everywhwre we want .

   


    //*? 27 what is dom , diffrence bitween virtual dom and real dom ?

    //todo->> dom stand for document object modsal it  through id ,claas ,element we can access html through the methodsa provided by dom ,  with the help of js we can also access html as weel ass css and add behaviour in html

 


    //? 28 what is reconsiliation ? 

    reconsilition is the process when react update the dom




    //? 29 what are the technologyes used to optimize react app ?
    there are many technogloy is used used to optmize react app like
    1 lazy loding
    2 use memo
    3 ssr
    4 image handling etc


    //? 30 what is event and synthic event in react ?

    // todo---> event is a aaction that can be trigred by user actions ther many events like onclik, on hover etc

    //? 31 what is unideractional flow ?

    undirectional data flow refer how data flow in react in react data flow parent to child

   


    //? 32 what is flux ?

    flux is a state management liveray created by google in flux there are two store


    //? 33 what is redux ?

    //todo--->> redux is free open-source javascript state management livray which manage the state globally it is mostley used in rect and angular .
    react-redux is a official binding react to redux.

  

    //? 354diffrence bitween redux and context api/use context ?

    //todo--> basicalllu use context is ude the seniro where state update are infrequent or simple globaly state managment is not cirtica; ande redux is used for the senioro where state updation is frequint and complax and stete managemt is need , redux also provide many feture like midliware , actions ,reducer etc.



    //? 35 what is middleware ?

    // todo---<> in redux middleware like a gatekeeper bitwween action and reducers i stop the action before reachig redures and add perform side effect on action , it inhance redux capility wihout affecting its core behiviour 



    //? 36 what is redux and what is redux flow ? explain it ?

    //todo-->> redux is a open source javascript livaray which manage te globally .redux flow describe how data flow in redux application redux have main 4 methods 
    1 action
    2 middlewares
    3 reducers
    4 store

    1 action --->>> action is a plan javascript object whicjh ddescrive the tpe of action and acosited data.
    2 middlerwar-->> in redux middleware like a gatekeeper bitwween action and reducers i stop the action before reachig redures and add perform side effect on action , it inhance redux capility wihout affecting its core behiviour 
    3 reducers--->> reducere are the pure function in js which are responsibale to handel dispatch action and update the ui , basically its tell us how to do and action tells what to do
    4 store -->>> store is a object ehich is used to store the data globallly , its also provise msome method lile;
    

    
*/}


            {/* //todo--- pc/ Logicial Questions  */}

            {/* //! 1 example of classs based componenrt  props,stste,defalut props ,propstype ? */}

            {/* <Practice  /> */}


            {/* //! 2 example of Function based component, use of use-state props, props in destrustred way and also as pass a spread oprator way obj ? */}

            {/* <Practice name={"khushi"}/> */}


            {/* //! 3 hide and show h1 on click ? */}

            {/* <Practice/> */}


            {/* //! 4 toggle h1 on click ?  */}
            {/* <Practice/> */}


            {/* //! 5 get the data from form ? */}
            {/* <Practice/> */}

            {/* //! 6 basic form validition ? */}

            {/* <Practice/> */}

            {/* //! 7 explain life cycle methods and is method ? */}

            {/* {data?<Practice name="somi"/>:""}
    <button onClick={()=>{setData(false)}}>unmounted</button> */}



            {/* //! 8 lifting state / send data  child components to parent component ? */}
            {/* <Practice fun = {funi}/> */}

            {/* //! 9 explain high order component with example ? */}
            {/* 
    <HOCRed cmd={<Practice/>}></HOCRed>
    <HOCBlue cmd={<Practice/>}></HOCBlue> */}

            {/* //! 10 get previous state in function based component with example ? */}

            {/* <Practice/> */}

            {/* //! 11 previous props in function based component with example ? */}
            {/* 
    <Practice  cmd= {counter}/>
    <button onClick={()=>{setCounter(counter+1)}}>btn</button> */}

            {/* //! 12 state with object means that state main object pas karne par issue is that whole object are chnage when we change only one property so avoide this we use spard oprator ? */}

            {/* <Practice/> */}

            {/* //! 13 explain hook and there types with example use state , use effect ,  use ref , use layouteffect custome hook ,use memo ,  use context , use callback ,   ? */}

           
            {/* <lightContext.Provider value={"khusboooooo i love you"}>
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
            <Practice/>


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
// export {context};
// export {lightContext}
// export {stateContext}
