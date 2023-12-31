"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <header className="lg:sticky lg:top-0 flex lg:max-h-screen lg:w-1/2 flex-col justify-center items-center">
            <h1 className="text-white text-6xl lg:text-6xl font-extrabold text-center">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400'>Hello, I&#39;m{" "}</span> 
                Jeremy
            </h1>
            <Image src="/images/profile.png" width={200} height={200} alt="me" className='py-6' unoptimized/>
            <h2 className="text-white text-3xl lg:text-5xl font-bold">
                <TypeAnimation
                    repeat={Infinity}
                    speed={50}
                    wrapper="span"
                    sequence={[
                        "⚡ Engineer",
                        1000,
                        "💻 Software Dev",
                        1000,
                        "🤖 AI Enthusiast",
                        1000,
                        "🔩 Tinker",
                        1000
                    ]}/>
            </h2>
            <div className='my-4'>
                <p className="text-[#ADB7BE] text-lg lg:text-xl max-w-xs lg:max-w-md self-center">
                    Self-proclaimed fuller stack engineer with a background in electrical engineering and computer science. I build robots and things that live on the internet, from websites, applications, or anything in between.
                </p>
            </div>
            <ul className="ml-1 flex items-center h-10 pb-4 lg:pb-0">
                <li className="mr-5 text-xs text-[#ADB7BE] hover:text-white">
                    <a className="block" href="https://github.com/ajcantor1">
                        <span className='sr-only'>Github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-6 w-6 fill-current">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </li>
                <li className="mr-5 text-xs text-[#ADB7BE] hover:text-white">
                    <a className="block">
                        <span className='sr-only'>Linkedin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className="h-6 w-6 fill-current">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                        </svg>
                    </a>
                </li>
                <li className="mr-5 text-xs text-[#ADB7BE] hover:text-white">
                    <a className="block">
                        <span className='sr-only'>Linkedin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" className="h-6 w-6 fill-current">
                        <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
                        </svg>
                    </a>
                </li>
                <li className="mr-5 text-xs text-[#ADB7BE] hover:text-white">
                    <a className="block">
                        <span className='sr-only'>Linkedin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23" className="h-6 w-6 fill-current">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                    </a>
                </li>
                <li className="mr-5 text-xs text-[#ADB7BE] hover:text-white">
                    <a className="block">
                        <span className='sr-only'>Linkedin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" className="h-6 w-6 fill-current">
                        <path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
                        </svg>
                    </a>
                </li>
            </ul>


        </header>
    )
}

export default Hero