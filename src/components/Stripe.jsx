import React from 'react'

const Stripe = ({ imgUrl, num }) => {
  return (
    <div className='w-1/6 px-4 py-3  border-t border-b border-r border-zinc-700  flex justify-between items-center'>
      <div className='w-[164px] h-[25px] overflow-hidden'>
        <img src={imgUrl} alt="" className='max-w-full max-h-full object-contain invert brightness-0' />
      </div>
      <span className='font-medium text-xs'>{num}</span>
    </div>
  )
}

export default Stripe
