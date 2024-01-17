
//! notebook Questions ---------->>>>>>>

//? 1 what is react & why is so popular  ?

// react is a free open-source javascript front-end library which is used to building intractive interfaces /webpages .
// it is most popular due to it`s assisential features like component basec aracture which is help to brakdown a complax user intarface in to smaller resuable parts and is allso use virtual dom which is make ract much faster to another one .


//? 2 what is features of react js ?

// react js have many features / advantages like 
// 1 jsx
// 2 easy to learn
// 3 virtual dom
// 4 one way data binding
// 5 component based arctacutre. etc.


//? 4 what is jsx ?

// jsx is stand for javascript syntax extension . it is allow to use html in react .


//? 5 what is react fragment ?

// fragment is a javascript feature which is allow to return multiple elements to the react componet by wrapping up all in to root element whith out adding extra node to the dom .
// fragment is a javscript feature , in react component ia only return one element if we want to return multiple com[onent] then we useto wrap all the element in to root elemnt so a extra node is rnder in this process in to dom . react fragment allw this without adding extra node in to dom .


//? 6 what are the hight order component and its use ?

// high order componet are the function whioch take another component as a argument and return a component called high order component , its allow to use a component logic in to multiple component.


//? 7 what is life-cycle method & its methods ?

// life -cycle method are custom functionality thast gets exituted diffrent phases of component . every component have life-cycle we can track an manipulate in diffrent phases of life-cycle .we have three main phases of life -cycle mounting , updating , unmounting .

// 1 Mounting-->> mounting mens puting an element in to dom ,when a eement insert in to dom . in this life-cycle method react a 4 bulid in methods that gets exitueted whwn component did mount .
//    1 Constructor 
//    2 getDrivedStateFromProps
//    3 render
//    4 component did mount 

// 2 Updating-->> next phase of life-cycle method is updating , when component state or props are changes then component is updated . in this process react have 5 build in methids that get exituted during tha component updation .
//    1 getDrivedStateFromProps
//    2 componentShouldUpdate
//    3 render
//    4 getSnapshotBeforeUpdate
//    5 component did update

// 3 Unmounting -->> in next steps of life -cycle method is unmounting , when a component tremoved from tha dom component unmounted in this process react have only 1 build in methid that gets exituted during the component unmount.
//    1 comonent will unmount


//? 8 what is component & types of component & what you preffred ?

// component is a resuable indepandent bites of code ,they perform same purpose as a ajvscript function , but work in isolation , there are 2 types of function .
// function based component 
// class based component 

// we prefred function based component because tha main diffrence bitween class based component and function based componet is tha synatax .
// function based component is a plan javascrpt function that get propsa and return react element .
// class based component is a need to extend from recat.constructor then we create a render method that retuen a react element .


//? 9 what is prop-dreling in react ?

// prop-dreling accors when we need to pass down the data through multiple component to react that one component which need the data that too complitate to recarfting the react apliction ,in this process we unenasserary paas the data too many component in this procees tha component is to comlicate to undersatnd the flow and recrafting it , to reduce this probalm we have usecontext and reudx. wjich is used to manage state globally so that we dont need to paas the data to every component ,in this procees which component need data which directaly acees the data througn redux , contex api 
// usecontext work on the macnisum usecontext or context provider , we need to wrap all the applaication in context provide so data can paas the application and through use contwxt we call the data .  


//? 10 what is key in react & use of key & why use key ?

// key is the special attribute that is need to add when creating a list of element . key is a identifryer which tels react what item are add,delete,or update .
// in absounce of key react relay on other method to finde that which item is add, delete or update this casues an issue or an error .


//? 11 can jsx directly read by the web browser ?

// jsx don not directley red by the browser becase brouser are understand only normsl js object jsx is not a noram object,to create simple object wee need totransferm them in to normal object , in this we use babal.


//? 12 why use react instends of other framworks ?

// beacuse it`s accinital features, react provide component based aracture which is used to brakdown a complax user interfase in to resaubal and samaller ui , and ist aldo use vitrtaup dom e=which make react faster to others , and use onay way data binding and jsx also . 


//? 13 how react diffrent with angular ?

// react and anagualr both are diffrent , angular is a js framwork , and react is a js libaray , angular work real dom and to way data binding , and react work on onw a=eay data biding and virtual dom , angular created by google and react create by fb .


//? 14 what is react-router ? is`s work ?

// react -router is a open-source js libaray , is is many used in react or anguar , it managing routing in both , its enable singal page routing which do not refresh to navigate links .
// there are two type routing 
// 1 covinital routing --(in which request goes to server and entire pager refreshed)
// 2 clint-side routing--(react work on csr in this server not goes to server either react itself handel.)


//? 15 what is state ?

// sate a build in object in react , it is used to store the component data/information , sate are both read and write ,


//? 16 what is props ?

// props stand for propertyes ,props is uded to transfrt the data parent c to chid omponent , props are read only which is used to storing d=data thet access by its children .  


//? 17 diffrence bitween state and props ?

// the main diffrence bitween sate and props is that props are read only but sate is both props are used to transfer the data parent coponent to child componet and sate are used manage the dasta inside the component isd=seflf


//? 18 what is controled component ?

// control component are the component in which from data handle by state .


//? 19 what is uncontroled component ?

// uncontrol component are c in which from data handle by use ref or other js methods . 


//? 20 what is statefull component ?

// sate full component are the componet which have a state object  ,like classbased component 


//? 21 what is stateless component ?

// satelss component are the componwnt which does not have any sate at all , like function based component,


//? 22 what is pure compponent diffrence bitween pure and high-order-component ?

// pure component are the function that does not rerender when the sate and props are change with the same value , is improve the app performance by avoiding unnessary renders.

// high order component are that component which takes another component as a argument and return a component  , we use when we have a component logic and we need to pass them in to multiple opmponent .


//? 23 what is lazy-loading ?

// lazy -loding is a most usefull feature in react . in lazy loding component only render when we need they unless render all at ones , its save bandwith memoery consumption , and app speed.


//? 24 what is error-boundery ?

// error boundary is a class based component which use to catch javascript run time erors and return a faalback ui instand of a react component that caursd .

//? 25 what is render ?

// render is a classbased component method which used to render the ui in the browser .


//? 26 what is hooks in react & it`s type explain all with exapmple ?

//  hooks are resauble function which provide class-based component features in to function based component.
// there are 3 main rules to use hook--
// 1 hooks can only use in function based component 
// 2 hhoks can only us in the top of the component 
// 3 hooks cant be conditional .

// in react we have some hhoks like
// 1 use state --->>
// 2 use effect --->>
// 3 use layouteffect-->>
// 4 use ref-->>
// 5 use memo-->>
// 6 use callback-->>
// 7 use reducer-->>
// 8 use context-->
// 9 custome hook-->


//? 27 what is dom , diffrence bitween virtual dom and real dom ?

// 


//? 28 what is reconsiliation ? 
//? 29 what are the technologyes used to optimize react app ?
//? 30 what is event and synthic event in react ?
//? 31 what is unideractional flow ?
//? 32 what is flux ?
//? 33 what is the diffrence bitween redux and flux ?
//? 34 what is redux ?
//? 35 diffrence bitween react js and redux ?
//? 36 diffrence bitween redux and context api/use context ?
//? 37 what is middleware ?
//? 38 what is redux and what is redux flow ? explain it ?



//todo--->>>  pc/ Logicial Questions ----->>>>>


//! 1 example of Function based component, use of use-state props, props in destrustred way and also as pass a spread oprator way obj ?

//! 2 example of classs based componenrt  props,stste,defalut props ,propstype ?
//! 3 hide and show h1 on click ?
//! 4 toggle h1 on click ? 
//! 5 get the data from form ?
//! 6 basic form validition ?
//! 7 explain life cycle methods and is method ?
//! 8 explain hook and there types with example ?
//! 9 lifting state / send data  child components to parent component ?
//! 10 explain high order component with example ?
//! 11 get previous state in function based component with example ?
//! 12 previous props in function based component with example ?
//! 13 state with object means that state main object pas karne par issue is that whole object are chnage when we change only one property so avoide this we use spard oprator ?

//! 14 setup routing togather nexted routing and dyanamic routing ?
//! 15 use of seacrchParams and setsearchParamas hooks in rrd // for give the output on the basics of what will serch/query in the url ?

//! 16 navigating on click / use of usenavigate hooks in rrd ?
//! 17 use of  use location hooks/ gives all the data of parent component  / reeadony porpuse i dont gt
//! 18 use protected route hooks  ( we also do that with the help of high-order component where we can paas a condition that if user is active then navigate to children(routes) else navigate login) ?

//! 19 firebase confidgure set user (login , logout registration ,admin login)
//! 19 firebase configure (get set and update data in firbase )



