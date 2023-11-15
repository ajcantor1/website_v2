import React from 'react'
import Projects from './Projects'
const About = () => {
    return (
        <main className="lg:w-1/2 pl-4 lg:flex lg:flex-col lg:justify-center lg:pt-36 mx-12">
            <div className='my-4'>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    My main focus these days is keeping up with the latest artificial intelligence trends and exploring novel ways to apply them. When I am not at computer or solder station you can find me out the gym, practicing Cuong Nhu, hanging out with my cats, or fighting crime.
                </p>
            </div>
            <div className='my-4'>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    I maintain this website as my personal notebook and portfolio.
                </p>
            </div>
            
            <Projects/>
        </main>
    )
}

export default About