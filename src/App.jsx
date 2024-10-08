import React from 'react'
import './App.css'
import './style.css'
import Resume from './assets/Bindu_Sri_Atyam_Resume___Frontend.pdf'
import Photo from './assets/photo.jpg'
import FunctionComp from './components/FunctionComp'  // variable name beside the import keyword must be in Pascal case     // FunctionComp is a sub component/child to app.jsx

function App() {
//const [count,setCount]= useState()      /* Hook declaration */


  return (
    <>    
    <FunctionComp />  { /*  rendering/composing the component <></> */} 
    { /* wrapper components <></> */} 
      <img src={Photo} className="image" alt="bindu image"></img>  { /* giving the variable that is used in the import to get the image path */} 
      <p>
       hi   
   </p>
    </>
  )
}

export default App
