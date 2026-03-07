import React from 'react'
import Stripe from './Stripe'
import { stripeData } from '../assets/assets'

const Stripes = () => {
  return (
    <div className='flex items-center mt-14'>
      {stripeData.map((item) => (
        <Stripe imgUrl={item.url} num={item.number} />
      ))}
    </div>
  )
}

export default Stripes
