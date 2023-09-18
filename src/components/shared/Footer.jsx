import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-black py-8 mt-4'>
        <div className='grid grid-cols-6 text-gray-600 text-sm text-center max-w-[500px] mx-auto'>
          <p>Account</p>
          <p>Report</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>API</p>
        </div>
        <div>
          <p className='text-gray-600 text-sm text-center mt-6 '>All rights reserved 2023</p>
        </div>
      </div>
    </>
  )
}

export default Footer