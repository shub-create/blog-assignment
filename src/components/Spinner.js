import React from 'react'
import {Circles} from 'react-loader-spinner'
import '../css/spinner.css'

const Spinner = () => {
  return (
    <div className='spin'>
        <Circles
         
         color="#00337C"
         height={50}
         width={200}
        />
        <p className="text"> Loading...</p>
    </div>
  )
}

export default Spinner