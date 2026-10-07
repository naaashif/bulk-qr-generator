import React, { useState } from 'react'

function Output({ qrResults }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < qrResults.length - 1 ? prevIndex + 1 : prevIndex))
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  return (
    <div className="w-full max-w-sm sm:max-w-md max-h-120 h-fit rounded-xl bg-[#9CC3D5] p-5">
      <div className='size-100 flex flex-col items-center justify-center p-1 w-full h-full'>
        <img src={qrResults[currentIndex]?.dataUrl} alt="qr code"
        className='red w-fit' />
        <h1 className="text-lg font-bold text-black  text-center *: mt-4">{qrResults[currentIndex]?.text}</h1>
        <div className="flex w-full justify-between items-center">
          <button className='bg-blue-600 font-semibold text-white rounded-lg px-4 py-1 hover:bg-blue-800 mt-4 mx-auto'
          onClick={handlePrevious}>
            previous
          </button>
          <button className='bg-blue-600 font-semibold text-white rounded-lg px-4 py-1 hover:bg-blue-800 mt-4 mx-auto'
          onClick={handleNext}>
            next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Output