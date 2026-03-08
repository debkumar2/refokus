import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp';


const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 20) {
    //             setIsScrolled(true);
    //         }
    //         else {
    //             setIsScrolled(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    const navItems = ['Home', 'Work', 'Culture', '', 'News'];
    return (
        <div className={`fixed top-0 left-0 w-full bg-zinc-900 z-20   transition-all duration-500 ease-linear}`}>
            <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b">
                <div className='flex items-center'>
                    <a href="" className='bg-[#e0e0e0] p-2 w-10 h-10 inline-block rounded-full object-cover'>
                        <img src={assets.brandLogo} alt="" className='w-full h-full' />
                    </a>
                    <div className='flex gap-14 ml-20'>
                        {navItems.map((item, index) => (
                            <>
                                {item.length === 0 ? (
                                    <span className='w-[0.5px] h-8 bg-zinc-700'></span>
                                ) :

                                    <a className={`flex gap-2 items-center font-semibold text-sm ${index === 0 ? 'text-white' : 'text-[#bfbfbf]'}`} key={index} href="">
                                        {index === 0 && (
                                            <span className='inline-block w-1.5 h-1.5 rounded-full bg-green-500 text-shadow-[0_0_25px_#00ff19] animate-pulse'></span>

                                        )}
                                        {item}
                                    </a>
                                }
                            </>
                        ))}
                    </div>
                </div>
                <ButtonComp btnText='Get Started' />
            </div>

        </div>
    )
}

export default Navbar
