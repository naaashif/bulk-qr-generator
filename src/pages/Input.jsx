import React from 'react'

function Input() {
    return (
        <div className="w-full max-w-sm sm:max-w-md max-h- rounded-xl border border-black bg-[#9CC3D5] p-2">
            <form action="submit">
                <div className='flex flex-col'>
                    <label htmlFor="prefix" className='mx-2 font-semibold'>Prefix</label>
                    <input id='prefix' type="text" placeholder='586_TEMP_012'
                     className='bg-gray-500 text-white px-2 py-1 border border-black rounded-lg' />
                </div>
            </form>
        </div>
    )
}

export default Input