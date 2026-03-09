import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Card = ({ width, isHeading, para, hover, subheading, heading, smallText, bigText }) => {
    return (
        <div className={`bg-zinc-800 p-5 rounded-xl flex flex-col justify-between ${width} ${hover && 'hover:bg-violet-600'} transition-all hover:px-8 duration-300`}>
            <div className='top w-full'>
                <div className="w-full flex justify-between items-center">
                    <h4 className='text-sm font-medium'>{subheading}</h4>
                    <BsArrowRight />
                </div>
                <div className='max-w-[250px]'>
                    <h3 className='text-2xl font-semibold mt-5'>{heading}</h3>
                </div>
            </div>
            <div className='down w-full mt-28'>
                {isHeading && (
                    <div>

                        <h2 className='text-6xl font-semibold tracking-tight leading-none'>{bigText}</h2>
                        <button className='border-zinc-300 border text-sm py-2 px-4 rounded-4xl mt-3'>Contact Us</button>
                    </div>
                )}
                {para && (
                    <p className='text-sm text-zinc-200'>{smallText}</p>
                )}
            </div>
        </div>
    )
}

export default Card
