import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Output({ qrResults }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < qrResults.length - 1 ? prevIndex + 1 : prevIndex))
  }
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }
const navigate = useNavigate()
  return (
    <div className="w-full max-w-sm sm:max-w-md max-h-125 h-fit rounded-xl bg-secondary p-5">
      <button onClick={() => navigate('/')} 
      className="text-lg bg-white border border-3 border-primary rounded-lg text-blue-800 font-bold px-3
      hover:bg-blue-200">
      go back</button>
      <div className="text-lg font-bold text-black text-center *: mt-4">QR {currentIndex + 1} of {qrResults.length}</div>
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