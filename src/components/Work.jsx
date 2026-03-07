import React from 'react'
import assets, { hoverEffectImg } from '../assets/assets'

const Work = () => {
    console.log('');

    return (
        <div className='w-full '>
            <div className="relative max-w-screen-xl mx-auto text-white text-center">
                <h1 className='py-4 font-medium xl:text-[28vw] leading-none select-none tracking-tight'>WORK</h1>
                <div className='absolute top-0 w-full h-full '>
                    {hoverEffectImg.map((item, index) => (
                        item.isActive && (
                            <img src={item.url} alt={item.url} className='w-42 rounded-lg absolute -translate-x-[50%] -translate-y-[-50%]' style={{ top: item.top, left: item.left }} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
