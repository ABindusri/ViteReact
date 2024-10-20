import React from 'react'
import RefPropComp from './RefPropComp'
import {useNavigate}  from 'react-router-dom' /* useNavigate is imported  */
import {Link} from 'react-router-dom'
const PropComp = () => {
  const navigate = useNavigate(); /* this is used to navigation like href in html */ /*use navigate is given to navigate variable to used it */

    const Bindu={Name:"Bindu Sri",Age:22,Work:"Software Developer" ,Salary:35000}

  return (
    <div>
   
  </div>
  )
}

export default PropComp