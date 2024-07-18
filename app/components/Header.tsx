import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '../styles/globals.css';
const Header = () => {
    return (
        <div className="flex pl-10 pt-6">
            <h1 className='text-4xl  font-mono' id='my-name'>
                <span className='text-yellow-400 pl-2'>A</span>shish
                <span className='text-yellow-400 pl-2 ml-4'>M</span>ahawal
            </h1>

            <div className="navigation-top font-mono ml-72 text-xl space-x-10 text-yellow-50 text-opacity-80  ">
                <a href="/" className="hover:text-yellow-400 " >Home</a>
                <a href="https://www.youtube.com/@ashishmahawal" target='_blank' className="hover:text-yellow-400 ">Youtube Channel</a>
                <a href="/" className="hover:text-yellow-400">Blog</a>
                <a href="/" className="hover:text-yellow-400">Contact</a>
            </div>
            <div className='mx-8 font-extrabold text-xl' id='divider'>
                |
            </div>
            <div id='social-media-links' className='pr-10 -space-x-2'>
                <SocialIcon bgColor='transparent' network='youtube' href='https://www.youtube.com/@ashishmahawal' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='linkedin' href='https://www.linkedin.com/in/ashishmahawal/' style={{ width: '60px', height: '56px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='x' style={{ width: '60px', height: '40px', opacity: 0.8 }} className='sm-icon' />
                <SocialIcon bgColor='transparent' network='github' href='https://github.com/ashishmahawal' style={{ width: '60px', height: '46px', opacity: 0.8 }} className='sm-icon' />
            </div>



        </div>
    )
}

export default Header