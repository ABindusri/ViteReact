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
import {Route,Routes, BrowserRouter} from 'react-router-dom' // importing route, BrowserRouter and routes from react router dom , we need to import these three to set routing
import UserDataComp from './components/UserDataComp'
import NavBar from './components/Nav/NavBar'
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
<BrowserRouter>
<NavBar/> {/* composing nav bar on top*/}
<Routes> 

  <Route path='/' element={<PropComp/>} />  {/* this is like visiting home , if no path given in the path. */}
  <Route path='/contact' element={<Form/>}/> {/* path indicates to the targted component , element is the Real component name */}
  <Route path='/count' element={<CountComp/>} />
  <Route path='/userlist' element={<UserDataComp/>} /> {/* in path , we need to give only small letters */}
</Routes>
 </BrowserRouter> {/* BrowserRouter is like a main router, path is declare in the Route , Router means wrapper provided by BrowserRouter*/}
 {/* its like a main router */}

    </>
  )
}
export default App
