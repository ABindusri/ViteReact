import React from 'react'
import RefPropComp from './RefPropComp'
import {useNavigate}  from 'react-router-dom' /* useNavigate is imported  */
import {Link} from 'react-router-dom'
const PropComp = () => {
  const navigate = useNavigate(); /* this is used to navigation like href in html */ /*use navigate is given to navigate variable to used it */

    const Bindu={Name:"Bindu Sri",Age:22,Work:"Software Developer" ,Salary:35000}

  return (
    <div>
<RefPropComp Bindu={Bindu}/> {/*Passing obj as a prop */}
<Link to='/contact'>
<button type='submit' className='border-2 rounded-md p-2 mt-2 bg-sky-800 text-white '  >Go to Contact</button>

</Link> {/*  using link tag to navigate/route */}
<button className='border-2 bg-red-400 text-white p-2 m-2' onClick={()=>navigate('/count')}> Go to Counter</button>
<button className='border-2 bg-green-900 text-white p-2 m-2' onClick={()=>navigate('/userlist')} >UserList </button>
  </div>
  )
}

export default PropComp