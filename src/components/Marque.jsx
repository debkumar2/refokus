import React from 'react'
import Marquee from "react-fast-marquee";
const Marque = ({ imgUrl, direction }) => {
    return (
        <div className='w-full py-6 whitespace-nowrap bg-zinc-900'>
            <Marquee speed={30} direction={direction} pauseOnHover={true} gradient={true} gradientColor={[248, 251, 253]} gradientWidth={200}>
                {imgUrl.map((url, index) => (
                    <img key={index} src={url} alt="" className='invert brightness-0 shrink-0 mx-10 w-28' />
                ))}
            </Marquee>
        </div>
    )
}

export default Marque
