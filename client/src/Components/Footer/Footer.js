import React from 'react'
import survey from '../../assets/survey.jpg'
import up from '../../assets/up.svg'
import down from '../../assets/down.svg'

const Footer = ({progress, handleNext, handlePrev}) => {
  return (
    <>
      <div className='px-4 sm:px-10 bottom-0'>
        <div className='sm:flex justify-between items-center px-6 py-4'>
            <div className='sm:w-44'>
                <p className='text-sm font-normal mb-1'>{progress}% completed</p>
                <div className={`w-[${progress}%] h-1 rounded-2xl bg-blue-500`}></div>
            </div>
            <div>
                <img className='inline mr-8' src={survey} alt='survey' width={160} />
                <img onClick={handleNext} className='inline border-2 hover:cursor-pointer mx-0.5 border-gray-400 p-2 hover:shadow-xl hover:shadow-blue-500/50' src={up} alt='survey' width={30} />
                <img onClick={handlePrev} className='inline border-2 hover:cursor-pointer mx-0.5 border-gray-400 p-2 hover:shadow-xl hover:shadow-blue-500/50' src={down} alt='survey' width={30} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
