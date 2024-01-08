import React from 'react'

function Product() {
  return (
    <>
      <BoxWrapper>
		<div className='flex flex-col h-screen md:flex-row justify-between gap-14 mx-4 items-start'>
    <div>
        <h1 className='text-xl font-semibold pb-3 font-sans tracking-tighter'>Add New Product</h1>
        <div>
          <form action="" method='Post'>
            <div className='flex flex-col mb-4'>
              <label htmlFor="name" className='text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter'>Product Name</label>
              <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm' />
            </div>
            <div className='flex flex-col mb-4' >
              <label htmlFor="description" className='text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter'>Description (optional)</label>
              <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm'/>
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="category" className='text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter'>Category</label>
              <p className='text-xs pb-1'>Include a category to assist in quick product identification</p>
              <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm'/>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="Pricing" className='text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter'>Pricing</label>
              <div className='flex gap-6'>
                <div>
                  <p className='text-xs pb-1'>selling Price</p>
                  <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm'/>
                </div>
                <div>
                  <p className='text-xs pb-1'>Discount Price</p>
                  <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm'/>
                </div>
              </div>
            </div>              

            <div>
              <label htmlFor="stock" className='text-sm font-semibold text-rgb[(107 114 128)] pb-1 font-sans tracking-tighter'>Stock</label>
              <p className='text-xs pb-1'>Stock Availability</p>
              <input type="text" className='w-full bg-slate-50 py-2 px-3 text-sm'/>
            </div>

            <button className='text-base my-10  bg-blue-400 hover:bg-blue-500 cursor-pointer text-slate-100 py-2 px-10 rounded-full '>Add Product</button>
            
          </form>
        </div>
      </div>

      {/* Right */}
			<div>
        <div className=' bg-slate-50 w-[600px] h-[400px]  flex justify-center items-center rounded-xl text-sm font-medium'>
          <div className='flex flex-col justify-center items-center w-[550px] h-[350px] bg-white rounded-xl p-6 text-center'>
            <p>Drag and Drop.JPEG File</p>
            <p>or</p>
            <p>Upload from device</p>
          </div>
        </div>
        
      </div>
			
		</div>
      </BoxWrapper>      
    </>
  )
}
function BoxWrapper({ children }) {
	return <div className="bg-white hover:bg-gray-100 rounded-sm p-4 flex items-center">{children}</div>
}

export default Product