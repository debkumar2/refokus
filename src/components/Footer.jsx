import React from 'react'
import assets from '../assets/assets';

const Footer = () => {
    const socialLinks = ['Instragram', 'Twitter(X)', 'Linkedin'];
    const sidemapLinks = ['Home', 'Work', 'Careers', 'Contact'];
    const subFooter = ['Privacy Policy', 'Cookie Policy', 'Impressum', 'Teams'];
    return (
        <div className="w-full ">
            <div className='max-w-screen-xl mx-auto py-10'>
                <div className="flex gap-20">
                    <div className='basis-1/2'>
                        <span className='text-[10rem] font-semibold leading-none tracking-normal'>refokus.</span>
                    </div>
                    <div className='basis-1/2'>
                        <div className='flex justify-between items-start'>

                            <div className="text-zinc-400 font-semibold">
                                <h5 className='text-sm mb-6'>Socials</h5>
                                <ul>
                                    {socialLinks.map((item, index) => (
                                        <li className='py-2 text-sm cursor-pointer hover:text-zinc-300 duration-300' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-zinc-400 font-semibold">
                                <h5 className='text-sm mb-6'>Sitemap</h5>
                                <ul>
                                    {sidemapLinks.map((item, index) => (
                                        <li className='py-2 text-sm cursor-pointer hover:text-zinc-300 duration-300' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="max-w-[230px] flex items-end flex-col">
                                <p className='text-sm pb-6 text-right'>Refokus us a pioneering digital agency driven by design and empowered by technology.</p>
                                <img className='w-[160px]' src={assets.webflowPartner} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <ul className='flex'>
                        {subFooter.map((item, index) => (
                            <li className='text-zinc-400 font-semibold text-sm mr-6 cursor-pointer' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
