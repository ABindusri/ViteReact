import React from 'react'
import RefPropComp from './RefPropComp'

const PropComp = () => {
    const Bindu={Name:"Bindu Sri",Age:22,Work:"Software Developer" ,Salary:35000}

  return (
    <div>
<RefPropComp Bindu={Bindu}/> {/*Passing obj as a prop */}
    </div>
  )
}

export default PropComp