import React from 'react'

const Orders = () => {
  return (
    <BoxWrapper>
      <div className='flex flex-col h-screen'>
        <h1 className=' block text-lg font-semibold mb-7 w-[1070px]'>Orders</h1>

        <div className='flex gap-10 text-xs font-semibold text-slate-400  border-b-2 border-slate-200 mb-4'>
          <p className='active:text-black cursor-pointer border-blue-700 border-b-2 text-black active:border-blue-700 active:border-b-2 pb-2'>ALL</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>OPEN</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>UNFULFILLED</p>
          <p className='active:text-black cursor-pointer active:border-blue-700 active:border-b-2 pb-2'>UNPAID</p>
        </div>

        <div className='flex gap-1 items-center justify-start text-xs font-semibold text-gray-500 border py-0 px-3'>
          <div className='flex gap-2 border-r-2 px-2 py-2'>
            <p>FILTER ORDERS</p>
            <p>V</p>
          </div>
          <div className='flex gap-2 px-3'>
            <p>Search Orders</p>
            <p>V</p>
          </div>
        </div>

        {/* Title */}
        <div className='flex gap-3 px-2 py-2 justify-start items-center text-sm font-sans font-bold tracking-tighter mt-4  text-gray-500 border-b border-t'>
          <div className='basis-[10%]'>checkbox</div>
          <div className='basis-[70%]'>ORDER</div>
          <div className='basis-[70%]'>DATE</div>
          <div className='basis-[70%]'>CUSTOMER</div>
          <div className='basis-[70%] justify-center text-center'>PAYMENT STATUS</div>
          <div className='basis-[70%]'>FULFILLMENT STATEMENT</div>
        </div>

        {/* order */}
        
        <div className='flex gap-3 px-2 py-4 justify-start items-center text-sm font-semibold tracking-tighter text-gray-500'>
          <div  className='basis-[10%]'>checkbox</div>
          <div className='text-blue-700 basis-[70%]'>#2575</div>
          <div className='basis-[70%]'>Aug 24, 2024</div>
          <div className='basis-[70%]'>Chosen Ireri</div>
          <div className='border  px-2 bg-slate-200 rounded-sm basis-[70%]'>Paid</div>
          <div  className='border  px-2 bg-slate-200 rounded-sm basis-[70%]'>Fulfilled</div>
        </div>

        <div className='flex gap-3 px-2 py-2 justify-start items-center text-sm font-semibold tracking-tighter text-gray-500 bg-gray-100 hover:bg-white'>
          <div  className='basis-[10%]'>checkbox</div>
          <div className='text-blue-700 basis-[70%]'>#2575</div>
          <div className='basis-[70%]'>Aug 24, 2024</div>
          <div className='basis-[70%]'>Chosen Ireri</div>
          <div className='border  px-2 border-red-500 text-red-500 rounded-sm basis-[70%]'>Unpaid</div>
          <div className='border  px-2  border-red-500 text-red-500 rounded-sm basis-[70%]'>Unfulfilled</div>
        </div>

        <div className='flex gap-3 px-2 py-4 justify-start items-center text-sm font-semibold tracking-tighter text-gray-500'>
          <div  className='basis-[10%]'>checkbox</div>
          <div className='text-blue-700 basis-[70%]'>#2575</div>
          <div className='basis-[70%]'>Aug 24, 2024</div>
          <div className='basis-[70%]'>Chosen Ireri</div>
          <div className='border  px-2 bg-slate-200 rounded-sm basis-[70%]'>Paid</div>
          <div  className='border  px-2 bg-slate-200 rounded-sm basis-[70%]'>Fulfilled</div>
        </div>



      </div>
      

    </BoxWrapper>
  )
}

function BoxWrapper({ children }) {
	return <div className="bg-white hover:bg-gray-100 rounded-sm p-4 flex items-center">{children}</div>
}

export default Orders