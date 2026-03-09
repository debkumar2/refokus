import React, { useState } from 'react'
import assets, { hoverEffectImg } from '../assets/assets'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
const Work = () => {
    const [images, setImages] = useState(hoverEffectImg);
    // console.log(images);

    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, 'change', (data) => {
        function imagesShow(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1 ?
                        { ...item, isActive: false }
                        :
                        { ...item, isActive: true }
                )
            )
        }
        switch (Math.floor(data * 100)) {
            case 1:
                imagesShow([])
                break;
            case 2:
                imagesShow([0])
                break;
            case 3:
                imagesShow([0, 1])
                break;
            case 4:
                imagesShow([0, 1, 2])
                break;
            case 5:
                imagesShow([0, 1, 2, 3])
                break;
        }

    })

    return (
        <div className='w-full mt-18'>
            <div className="relative max-w-screen-xl mx-auto text-white text-center">
                <h1 data-scroll data-scroll-speed="-2" className='py-12 font-medium xl:text-[28vw] leading-none select-none tracking-tight'>WORK</h1>
                <div className='absolute top-0 w-full h-full '>
                    {images.map((item, index) => (
                        item.isActive && (
                            <img key={index} src={item.url} alt={item.url} className='w-42 rounded-lg absolute -translate-x-[50%] -translate-y-[-50%]' style={{ top: item.top, left: item.left }} />
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
