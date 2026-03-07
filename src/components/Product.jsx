import React from 'react'
import ButtonComp from './ButtonComp'

const Product = ({ name, desc, isLive, isCase }) => {
    return (
        <div className='w-full py-14 text-white  '>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <h2 className='text-5xl font-medium capitalize'>{name}</h2>
                <div className='w-1/3'>
                    <p className='text-base mb-6 font-normal'>{desc}</p>
                    <div className='flex gap-4'>
                    {isLive && (
                        <ButtonComp btnText='Live Website' />
                    )}
                    {isCase && (
                        <ButtonComp btnText='Case Study' />
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
