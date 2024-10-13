import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const HeadingTwo = () => {
  return (
    <div>
        <h1 className='text-fuchsia-900 font-bold text-xl font-nova' >
            This is heading 2
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam maxime sunt nemo voluptas! Quos doloribus, aliquam eaque quo maiores sint labore totam deleniti laboriosam dignissimos modi nemo deserunt! Quos, rem.
        </p>
        <h4 className='font-bold '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam maxime sunt nemo voluptas! Quos doloribus
        </h4>
        <button className='bg-blue-950 text-white rounded-md px-3 py-2 hover:bg-red-700 pt-1 pb-1 mx-2 my-2 m-3  font-poppins'> 
          <DeleteOutlineIcon/>Click me bro
        </button>
    </div>
  )
}

export default HeadingTwo