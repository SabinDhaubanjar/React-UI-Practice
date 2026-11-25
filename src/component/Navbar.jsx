import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between mb-10'>
      <div>
        <div className='bg-black text-amber-50 px-4 py-1 rounded-4xl'>
          Target Audience
        </div>
      </div>

      <div className='flex w-2xs justify-between font-medium text-xl'>
        <div>Digital</div>
        <div>Banking</div>
        <div>Platform</div>
      </div>
    </div>
  )
}

export default Navbar