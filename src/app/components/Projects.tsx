import React from 'react'
import Image from 'next/image'
const Projects = () => {
    return (
        <ul className="flex flex-col py-10 text-[#ADB7BE] mx-2 text-xs lg:text-xl">
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/wordle_bot.gif" width={200} height={200}  alt="me" unoptimized className='z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4'/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>Wordle Bot</h3>
                    <p className=''>A small sample of what can be accomplished via browser automation. Wordle Strategy/algorithm was directly inspired by <a href="https://www.youtube.com/watch?v=v68zYyaEmEA" rel="nofollow" className='underline'>Grant Sanderson</a>.</p>
                </div>
            </li>
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/wildfire.gif" width={200} height={200}  alt="me" unoptimized className='z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4'/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>A Lightweight Deep Recurrent Q-Learning Technique for Autonomous Wildfire Surveillance.</h3>
                    <p className=''><a href="https://www.overleaf.com/read/ptzwkqfsgsqk#2fe1f8" rel="nofollow" className='underline'>Paper</a> and poster submitted to IEEE&#39;s ICMLA.</p>
                </div>
            </li>
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/seaquest.gif" width={200} height={200}  alt="me" unoptimized className='z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4'/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>King of Games Learning Environment</h3>
                    <p className=''>Main contributor to a fast Atari-style reinforcement learning environment.</p>
                </div>
            </li>
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/robot_path.gif" width={200} height={200}  alt="me" unoptimized className='z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4'/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>Web Render of Robot Trajectory</h3>
                </div>
            </li>
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/hair_detection.png" width={200} height={200}  alt="me" unoptimized className='z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4'/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>Convolutional residual network for hair segmentation.</h3>
                    <p className=''>Perform an average over hair-pixels to determine hair color and/or recommend based on hair color. Proposed CNN Courtesy of:<a href="https://www.overleaf.com/read/ptzwkqfsgsqk#2fe1f8" rel="nofollow" className='underline'>Alex Levinshtein, Cheng Chang, Edmund Phung,Irina Kezele, Wenzhangzhi Guo, Parham Aarab</a> </p>
                </div>
            </li>
            <li className="group my-8 relative grid grid-cols-8 gap-8 transition-all sm:items-center sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 items-center justify-center">
                <div className="absolute -inset-x-0 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <Image src="/images/switch.gif" width={200} height={200}  alt="me" unoptimized className="z-10 col-span-4  lg:col-span-2 rounded border-2 object-center border-slate-200/10 transition group-hover:border-slate-200/30 lg:mx-4 my-0 lg:my-4"/>
                <div className='z-10 lg:col-span-6 col-span-4 lg:my-2 my-8'>
                    <h3 className='font-bold'>Mobile Friendly React JS Switch UI Example.</h3>
                </div>
            </li>
            
        </ul>
    )
}

export default Projects