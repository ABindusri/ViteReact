import React from 'react'
import './App.css'
import './style.css'
import Resume from './assets/Bindu_Sri_Atyam_Resume___Frontend.pdf'
import Photo from './assets/photo.jpg'
import FunctionComp from './components/FunctionComp'  // variable name beside the import keyword must be in Pascal case     // FunctionComp is a sub component/child to app.jsx
import PropComp from './components/PropComp'
import StateComp from './components/StateComp'
import CountComp from './components/CountComp'
import ReactListsComp from './components/ReactListsComp'
import { useState } from 'react'
import UserListComp from './components/UserListComp'
import Form from './components/Form'
function App() {
const employeeData=[{id:1,Name:"Bindu",Salary:40000,Work:"Developer",Age:25},{id:2,Name:"Harish",Salary:50000,Work:"Developer",Age:25},{id:3,Name:"Bubu",Salary:10000,Work:"Designer",Age:20}]
 //to Fetch an API to get data
 const [userData,setUserData]=useState([]); //intializing a state - taking an empty array
 const fetchFun=()=>{fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {setUserData(data.data) //as data is in the form of array of objects 
    console.log(data)
  }) //passing data to the state to use is it list cards
  .catch(error => console.error('Error:', error));
 }
  return (
    <>    
    { /*  rendering/composing the component <></> */}  { /* wrapper components <></> */} 
    <PropComp/>
    <StateComp/>
    <CountComp/>
    <div className='flex'>
    {employeeData.map((Empdata,index)=> <ReactListsComp data={Empdata} key={index} />)}     { /* using map to render the employee components , its like a for loop to get the data  . data={Empdata} is we are passing data by sending it as a prop */} 
    { /* map is used to loop the employeeData   */} 
    <button onClick={fetchFun}>fetch btn</button>
    {userData.map((Edata,index)=> <UserListComp data={Edata} key={index}/>)}     { /* sending Edata into data using map. data  is used as a prop in UserListComp to print cards */}
    {/* index is to make it unique */}
     </div>
     <Form/>
    </>
  )
}
export default App
