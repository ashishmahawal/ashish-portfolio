import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

const Introduction = () => {
    return (
        <div className="flex flex-row font-mono pl-10 items-center justify-center my-20 ">
            <div className="brief-intro">
                <div className="flex-col mt-42 " id='intro-hello'>
                    <div className="flex  mx-auto text-yellow-400 text-3xl space-x-4">
                        <hr className="border-t-2 border-yellow-400  w-12 mt-4" />
                        <span>Hello</span>
                    </div>

                </div>
                <p className='text-4xl font-mono mt-4'>
                    I&apos;m Ashish Mahawal
                </p>
                <p className='text-yellow-50 text-opacity-50'>
                    Fullstack Developer & Instructor
                </p>
                <p className='text-yellow-50 text-opacity-70  text-justify pr-56'>
                    Hi there! My name is Ashish Mahawal and I’m a software engineer
                    with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.
                </p>

                <button className='breathing-shadow button-yt'>

                    <Link href="https://www.youtube.com/@ashishmahawal" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-400">
                            Join my Youtube
                        </a>

                    </Link>
                    <SocialIcon network='youtube' href='https://www.youtube.com/@ashishmahawal' target='_blank' bgColor='transparent' fgColor='red' style={{ width: 64, height: 64 }} />
                </button>
            </div>

            <div className=" flex flex-col big-photo mr-74  w-[80%] scale-150 px-20 pt-52 mt-32 ">
                <img src='./ashish_nobg.jpg' alt="Ashish Photo" className='mb-10 mr-36 transform -translate-y-36 scale-125' />
                <div className=' mr-52 w-[65%]  breathing-shadow-lg -mt-32' ></div>
            </div>
        </div>
    )
}

export default Introduction