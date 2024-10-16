import React from 'react'
import { useState } from 'react';
const CountComp = () => {
    const [count, setCount]=useState(0);
const handleIncCount=()=>
{
    setCount((prevState)=>{  
prevState+1
    });
}
const handleDecCount=()=>
{
    setCount((prevState)=>{
        prevState-1
    });

}
  return (
    <div className='flex'>
        <button onClick={handleIncCount}  className='text-xl border-2 p-3 m-3'>+</button>
        <p className='p-3 m-2'> {count}</p>
        <button onClick={handleDecCount} className='text-xl border-2 p-3 m-3'>-</button>
        </div>
  )
}

export default CountComp