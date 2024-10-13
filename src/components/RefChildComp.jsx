import React from 'react'

const RefChildComp = ({sendToParent}) => {
    const data="some data"; //this data should be passed to parent with the help of a call back function in the parent component
    const fun=()=>{
        sendToParent(data) /* this function is used for making action like button clicking */
    }
  return (
    <div>
        <button onClick={fun}>Click me</button>
        <p>
            </p>

            </div>
  )
}

export default RefChildComp