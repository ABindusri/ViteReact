import React from 'react'

const UserListComp = (prop) => {
    console.log(prop)

  return (
         <div  className="flex flex-col ml-4 mt-5 border-solid border-2 bg-blue-200 p-5 w-30 h-70 shadow-md  rounded ">
        <h6>{prop.data.first_name + prop.data.last_name}</h6>
        <h4 className="pt-2">{prop.data.email}</h4>
        <img src= {prop.data.avatar} ></img>
        
    </div>
 
  )
}

export default UserListComp