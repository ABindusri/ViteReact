import React, { useState } from 'react'
import UserListComp from './UserListComp';
const UserDataComp = () => {
        const [userData,setUserData]=useState([]); //intializing a state - taking an empty array
        const fetchFun=()=>{fetch('https://reqres.in/api/users?page=2')
         .then(response => response.json()) // Parse the JSON response
         .then(data => {setUserData(data.data) //as data is in the form of array of objects 
           console.log(data)
         }) //passing data to the state to use is it list cards
         .catch(error => console.error('Error:', error));
        }
    
  return (
    <div>
        <button className='border-2 bg-emerald-700 p-2 m-2 text-white' onClick={fetchFun}>Fetch User Data</button>
     <div className='flex md:flex-row flex-col'> {userData.map((UserdataSend)=> <UserListComp data={UserdataSend}/>)} </div>
    </div>
  )
}

export default UserDataComp