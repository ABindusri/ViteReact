import React from 'react'
import HeadingTwo from './HeadingTwo'  // the below 3 components are childs of function component(FunctionComp).
import FunctionCompTwo from './FunctionCompTwo'
import ParagraphComp from './ParagraphComp'

const FunctionComp = () => {
  return (
    <div>
        <HeadingTwo/>
        <ParagraphComp/>
        <FunctionCompTwo/>
    </div>
  )
}

export default FunctionComp