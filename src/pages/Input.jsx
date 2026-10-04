import React from 'react'

function Input() {
    return (
        <div className="w-full max-w-sm sm:max-w-md h-fit max-h-125 rounded-xl bg-[#9CC3D5] p-2">
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md mx-auto p-4 space-y-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="prefix" className="text-sm font-semibold text-black px-1">
                        Prefix
                    </label>
                    <input
                        id="prefix"
                        type="text"
                        placeholder="586_TEMP_012"
                        className="w-full bg-gray-700 text-white placeholder-gray-500 px-3 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="data" className="text-sm font-semibold text-black px-1">
                        Data
                    </label>
                    <textarea
                        id="data"
                        rows="10"
                        placeholder={"10001\n10002\n10003"}
                        className="w-full bg-gray-700 text-white placeholder-gray-500 px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none   "
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-blue-600 font-semibold text-white rounded-lg px-4 py-1 hover:bg-blue-800 '
                    onClick={{}}
                    >Generate</button>
                </div>
            </form>
        </div>
    )
}

export default Input