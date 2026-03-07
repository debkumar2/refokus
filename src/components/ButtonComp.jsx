import React, { useState } from 'react'
import { GoArrowDownRight, GoArrowRight, GoArrowUpRight } from 'react-icons/go'

const ButtonComp = ({btnText}) => {
  const [arrowState, setArrowState] = useState(false);
  return (
    <button className=' px-4 py-3 bg-zinc-100 text-black rounded-xl flex items-center gap-1 duration-300 transition-all'>
      <span className='text-sm font-semibold'>{btnText}</span>
      <GoArrowUpRight />
    </button>
  )
}

export default ButtonComp
