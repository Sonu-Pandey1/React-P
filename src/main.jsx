import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Provider } from 'react-redux'
// import store from './Store.jsx'
// import { ThemChangeContextProvider } from './context/themChangeContext.jsx'
// import './index.css'
// import { DarkModeContextProvider } from './context/darkModeContext.jsx'
// import { ThemChangerContextProvider } from './context/themChangerContext.jsx'
// import { DarkModeContextProvider } from './context/darkModeContext.jsx'
// import store from './Store.jsx'
// import { Provider } from 'react-redux'
// import store from "./Store.jsx"

// store.subscribe(()=> console.log(store.getState()))





ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* <DarkModeContextProvider> */}
    {/* <ThemChangerContextProvider> */}
    {/* <Provider store = {store}> */}
    {/* <ThemChangeContextProvider> */}
      <App />
      {/* </ThemChangeContextProvider> */}
      {/* </Provider> */}
    {/* </ThemChangerContextProvider> */}
    {/* </DarkModeContextProvider> */}

  </React.StrictMode>,
)
