import React from 'react'

const Customers = () => {
  return (
    <>
      <div className='flex flex-col h-screen bg-white mt-3 px-4'>
        <h1 className=' block text-lg font-semibold mb-7 w-[1070px]'>Customers</h1>

        <div className='flex gap-10 text-xs font-semibold text-slate-400  border-b-2 border-slate-200 mb-4'>
          <p className='active:text-black cursor-pointer border-blue-700 border-b-2 text-black active:border-blue-700 active:border-b-2 pb-2'>ALL</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>FEEDBACK</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>ACTIVE</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>DISABLED</p>
        </div>

        <div className='flex gap-1 items-center justify-start text-xs font-semibold text-gray-500 border py-0 px-3'>
          <div className='flex gap-2 border-r-2 px-2 py-2'>
            <p>FILTER CUSTOMERS</p>
            <p>V</p>
          </div>
          <div className='flex gap-2 px-3'>
            <p>Search Customer</p>
            <p>V</p>
          </div>
        </div>
      </div>
      

    </>
  )
}

// function BoxWrapper({ children }) {
// 	return <div className="bg-white hover:bg-gray-100 rounded-sm p-4 flex items-center">{children}</div>
// }

export default Customers