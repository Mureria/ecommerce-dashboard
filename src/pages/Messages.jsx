import React from 'react'


const Messages = () => {
  const messages = false;

  return (
    <div className='h-screen bg-slate-100 p-4'>
      {messages ? (
        <div>
          <p>SHOW MESSAGE 1</p>
          <p>SHOW MESSAGE 2</p>
          <p>SHOW MESSAGE 3</p>
          <p>SHOW MESSAGE 4</p>
          <p>SHOW MESSAGE 5</p>
          <p>SHOW MESSAGE 6</p>
        </div>
      ) : (
        <div className=' flex justify-center items-center mt-64 text-xl text-gray-400'>
          <p>No messages at the moment!</p>
        </div>
      )}
    </div>
  )
}

export default Messages