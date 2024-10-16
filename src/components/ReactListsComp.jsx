import React from 'react'

const ReactListsComp = (prop) => {
    //console.log(prop)
  return (
        
        <div className="flex flex-col ml-4 mt-5 border-solid border-2 bg-blue-200 p-5 w-30 h-70 shadow-md  rounded ">
        <h4 className="pt-2">{prop.data.Name}</h4> {/* Receiving data as a prop */}
        <h6>{prop.data.Work}</h6>
        <p>₹ {prop.data.Salary}</p>
        <p>{prop.data.Age}</p>
        
    
    </div>
  )
}

export default ReactListsComp