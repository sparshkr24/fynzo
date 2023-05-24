import React from 'react'

const Alert = ({message}) => {
  return (
    <>
      <div className='fixed h-16 sm:h-12 w-full flex justify-start items-center bg-gradient-to-r from-[#380036] to-[#0CBABA]'>
        <p className='p-4 text-white font-semibold '>{message}</p>
      </div>
    </>
  )
}

export default Alert
