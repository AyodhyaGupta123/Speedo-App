
import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1625217527288-93919c99650a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlaGljbGV8ZW58MHx8MHx8fDA%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-[30%] ml-5 pb-5 mb-8' src="" alt="" />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Speedo</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start