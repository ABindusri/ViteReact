import React from 'react'
import { useState } from 'react';
const Form = () => {
    const [name,setName]=useState(''); //declaration of state
    const [role,setRole]=useState('');
    const [mobile,setMobile]=useState('');
    const [course,setCourse]=useState('Mean');
    const handleSubmit=(event) =>{  {/* preventDefault is used to stop the refreshing of page. event is returned automatically by the form */}
        event.preventDefault();
        console.log(name,role,mobile,course);
    }
    
  return (
    <div>
        <form className='flex flex-col mx-96 my-8 border-sky-900 bg-cyan-100 p-5 border-2 rounded-2' 
        onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} className='py-2 focus:ring-2 focus:ring-red-500  focus:outline-none focus:rounded-sm' onChange={(event)=>{setName(event.target.value)}}></input> 
            {/* Initially setting the intial value to the state we need to give as value={state variable} */}
            {/* when ever the user alter the value in the input, we use onChange attribute: we need to create an anonymus function to set the value to the state variable */}
            <label>Role</label>
            <input type='text' value={role}  className='py-2 focus:ring-2 focus:ring-red-500 focus:outline-none  focus:rounded-sm' onChange={(event)=>{setRole(event.target.value)}}></input>
            <label>Mobile</label>
            <input type='number' value={mobile} className='py-2 focus:ring-2 focus:ring-red-500 focus:outline-none focus:rounded-sm' onChange={(event)=>{setMobile(event.target.value)}}></input>
            <label>Course</label>
            <select value={course} className='py-2 focus:ring-2 focus:ring-red-500 focus:outline-none focus:rounded-sm' onChange={(event)=>{setCourse(event.target.value)}}>
                <option value='Mern'>Mern</option>
                <option value='Mean'>Mean</option>
                <option value='React'>React</option>
            </select>
            <button type='submit' className='border-2 rounded-md p-2 mt-2 bg-sky-800 text-white '>Submit</button>
        </form>
    </div>
  )
}

export default Form