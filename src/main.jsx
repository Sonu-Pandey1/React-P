import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import { ThemChangerContextProvider } from './context/themChangerContext.jsx'
// import { DarkModeContextProvider } from './context/darkModeContext.jsx'
// import store from './Store.js'
// import { Provider } from 'react-redux'

// store.subscribe(()=>console.log(store.getState()))


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    {/* <DarkModeContextProvider> */}
    <ThemChangerContextProvider>
      <App />
    </ThemChangerContextProvider>
    {/* </DarkModeContextProvider> */}

  </React.StrictMode>,
)
