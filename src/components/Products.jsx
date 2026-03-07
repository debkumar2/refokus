import React from 'react'
import Product from './Product'
import { productData } from '../assets/assets'

const Products = () => {
    return (
        <div className='mt-14'>
            {productData.map((item) => (
                <Product name={item.name} desc={item.para} isLive={item.live} isCase={item.case} />
            ))}
        </div>
    )
}

export default Products
