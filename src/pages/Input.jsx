import React from 'react'

function Input() {
    return (
        <div className="min-w-10 bg-[#9CC3D5] p-2">
            <form action="submit">
                <div className='flex flex-col'>
                    <label htmlFor="prefix">prefix</label>
                    <input id='prefix' className='bg-gray-500 text-white' type="text" />
                </div>
            </form>
        </div>
    )
}

export default Input