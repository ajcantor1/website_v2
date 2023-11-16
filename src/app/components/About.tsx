import React from 'react'
import Projects from './Projects'
const About = () => {
    return (
        <main className="lg:w-1/2 pl-4 flex flex-col justify-center lg:pt-36 items-center lg:items-start">
            <div className='my-4'>
                <p className="text-[#ADB7BE] text-lg lg:text-xl max-w-xs lg:max-w-none lg:mx-4 self-center">
                    My main focus these days is keeping up with the latest artificial intelligence trends and exploring novel ways to apply them. When I am not at computer or solder station you can find me out the gym, practicing Cuong Nhu, hanging out with my cats, or fighting crime.
                </p>
            </div>
            <div className='my-4'>
                <p className="text-[#ADB7BE] text-lg lg:text-xl max-w-xs lg:max-w-none lg:mx-4">
                    I maintain this website as my personal notebook and portfolio.
                </p>
            </div>
            
            <Projects/>
        </main>
    )
}

export default About