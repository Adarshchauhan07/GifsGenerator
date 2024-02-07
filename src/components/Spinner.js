import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center flex-col spinnerClass'>
        <div className="spinner"></div>
        <h3>Loading...</h3>
    </div>
  )
}

export default Spinner;