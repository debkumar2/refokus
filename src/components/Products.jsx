import React from 'react'
import Product from './Product'
import { productData } from '../assets/assets'

const Products = () => {
    return (
        <div>
            {productData.map((item) => (
                <Product name={item.name} desc={item.para} isLive={item.live} isCase={item.case} />
            ))}
        </div>
    )
}

export default Products
