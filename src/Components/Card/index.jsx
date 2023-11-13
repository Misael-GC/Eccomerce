import React from 'react'

function Card(data) {
  return (
    <div className='bg-white cursor-pointer mb-20 w-56 h-60 rounded-lg '>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5 '>{data.data?.category}</span>
            <img 
                src={data.data?.image}
                alt={data.data?.description}
                className='w-full h-full object-cover rounded-lg '
            />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-slate-100/90 w-6 h-6 rounded-full m-2 p-1'>+</div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data?.title}</span>
            <span className='text-lg font-medium'>${data.data?.price}</span>
        </p>
    </div>
  )
}

export default Card;