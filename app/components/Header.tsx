import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '../styles/globals.css';
import { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setMenuOpenState] = useState(false)

    return (
        <div className="flex pl-10 pt-6 items-center justify-between ">

            {/* Ashish Mahawal Banner */}
            <h1 className='my-name text-4xl  font-mono' >
                <span className='text-yellow-400 pl-2'>A</span>shish
                <span className='text-yellow-400 pl-2 ml-4'>M</span>ahawal
            </h1>
            {/* Navigation Menu */}
            <div className="navigation-top hidden justify-between items-center sm:text-sm md:space-x-3 md:text-base md:flex font-mono lg:ml-72 ml-auto lg:text-xl lg:space-x-10 text-yellow-50 text-opacity-80  ">
                <a href="/" className="hover:text-yellow-400 " >Home</a>
                <a href="https://www.youtube.com/@ashishmahawal" target='_blank' className="hover:text-yellow-400 ">Youtube Channel</a>
                <a href="/" className="hover:text-yellow-400">Blog</a>
                <a href="/" className="hover:text-yellow-400">Contact</a>
            </div>

            {/* Divider */}
            <div className='mx-8 font-extrabold text-xl lg:flex hidden justify-between items-center ' id='divider'>
                |
            </div>

            {/* Social Media Icons */}
            <div id='social-media-links' className='lg:flex hidden pr-10 -space-x-2 justify-between items-center mt-2'>
                <SocialIcon bgColor='transparent' network='youtube' href='https://www.youtube.com/@ashishmahawal' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='linkedin' href='https://www.linkedin.com/in/ashishmahawal/' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='x' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='github' href='https://github.com/ashishmahawal' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
            </div>

            {isMenuOpen && (
                <nav className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-opacity-80">
                        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Home</a>
                        <a href="https://www.youtube.com/@ashishmahawal" target='_blank' className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Youtube Channel</a>
                        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Blog</a>
                        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400">Contact</a>
                        <div className="flex justify-center space-x-4 mt-4">
                            <SocialIcon bgColor='transparent' network='youtube' href='https://www.youtube.com/@ashishmahawal' style={{ width: '30px', height: '30px', opacity: 0.8 }} className='sm-icon' />
                            <SocialIcon bgColor='transparent' network='linkedin' href='https://www.linkedin.com/in/ashishmahawal/' style={{ width: '30px', height: '30px', opacity: 0.8 }} className='sm-icon' />
                            <SocialIcon bgColor='transparent' network='x' style={{ width: '30px', height: '30px', opacity: 0.8 }} className='sm-icon' />
                            <SocialIcon bgColor='transparent' network='github' href='https://github.com/ashishmahawal' style={{ width: '30px', height: '30px', opacity: 0.8 }} className='sm-icon' />
                        </div>
                    </div>
                </nav>
            )}
        </div>
    )
}

export default Header