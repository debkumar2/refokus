import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marques from './components/Marques'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full  bg-zinc-900 text-white overflow-hidden'>
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
    </div>
  )
}

export default App
