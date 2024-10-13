import React from 'react'
import { useState } from 'react' //importing 
const StateComp = () => {
    const [clr,setClr]=useState('red') //const [variable name, function to set/update the colour] = hook('initial value')
    const handleColorChange=()=>{
        setClr('green') //modifiying the value of the state clr using setClr(), passing as an argument to it.It will rerender the component as soon as the state changes 
    }
  return (
    <div >
        <button onClick={handleColorChange}> Press here</button> {/* modyfing the value using handleColorChange function with the help of an event listener */}
        {clr} </div>
  )
}

export default StateComp