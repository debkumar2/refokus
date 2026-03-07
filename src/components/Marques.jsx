import React from 'react'
import Marque from './Marque'
import { marqueImages } from '../assets/assets'

const Marques = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-14'>
            {marqueImages.map((item, index) => (
                <Marque imgUrl={item} direction={index === 1 ? 'right' : 'left'} />
            ))}
        </div>
    )
}

export default Marques
