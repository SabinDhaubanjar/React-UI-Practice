import React from 'react'

const Middle = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col justify-around flex-1 h-150'>
        <div className='flex flex-col px-8 py-8'>
          <div className='text-6xl font-bold mb-8'>Prospective Customer Segmentation</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odit obcaecati necessitatibus nisi minus amet consectetur veritatis aliquid alias quidem.</div>
        </div>

        <div className='font-bold text-8xl px-6'>
          <i class="ri-arrow-right-up-line"></i>
        </div>
      </div>

      <div className='flex justify-between flex-2 p-4 '>
        <div className="h-130 w-2xs rounded-4xl bg-[url('https://images.unsplash.com/photo-1793181015187-95fac164d13a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center flex flex-col justify-between px-8 py-8">

          <div className="bg-white text-black px-5 py-2 rounded-4xl w-2.5 flex items-center justify-center">
            1
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className='mb-15 text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi, vel pariatur sequi in animi fugit!</div>

            <div className='flex justify-between'>
              <button className='px-6 py-2 font-bold text-base bg-blue-500 text-white rounded-2xl'>Satisfied</button>
              <button className='px-4 py-2 font-bold text-base bg-blue-500 text-white rounded-4xl'><i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>

        <div className="h-130 w-2xs rounded-4xl bg-[url('https://images.unsplash.com/photo-1792027632865-07a747ca9728?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center flex flex-col justify-between px-8 py-8">

          <div className="bg-white text-black px-5 py-2 rounded-4xl w-2.5 flex items-center justify-center">
            2
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className='mb-15 text-xl font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi, vel pariatur sequi in animi fugit!</div>

            <div className='flex justify-between'>
              <button className='px-6 py-2 font-bold text-base bg-blue-500 text-white rounded-2xl'>Underserved</button>
              <button className='px-4 py-2 font-bold text-base bg-blue-500 text-white rounded-4xl'><i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>

        <div className="h-130 w-2xs rounded-4xl bg-[url('https://images.unsplash.com/photo-1772176597165-f19181b5fdf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center flex flex-col justify-between px-8 py-8">

          <div className="bg-white text-black px-5 py-2 rounded-4xl w-2.5 flex items-center justify-center">
            3
          </div>
          <div className='flex flex-col justify-evenly'>
            <div className='mb-15 text-xl font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi, vel pariatur sequi in animi fugit!</div>

            <div className='flex justify-between'>
              <button className='px-6 py-2 font-bold text-base bg-blue-500 text-white rounded-2xl'>Underbanked</button>
              <button className='px-4 py-2 font-bold text-base bg-blue-500 text-white rounded-4xl'><i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Middle