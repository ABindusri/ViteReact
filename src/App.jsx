import React from 'react'
import './App.css'
import './style.css'
import Resume from './assets/Bindu_Sri_Atyam_Resume___Frontend.pdf'
import Photo from './assets/photo.jpg'
import FunctionComp from './components/FunctionComp'  // variable name beside the import keyword must be in Pascal case     // FunctionComp is a sub component/child to app.jsx
import PropComp from './components/PropComp'
import StateComp from './components/StateComp'
import CountComp from './components/CountComp'
function App() {
//const [count,setCount]= useState()      /* Hook declaration */


  return (
    <>    
    { /*  rendering/composing the component <></> */} 
    { /* wrapper components <></> */} 
    <PropComp/>
    <StateComp/>
    <CountComp/>

    </>
  )
}

export default App
