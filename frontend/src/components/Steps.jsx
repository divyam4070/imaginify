import React from 'react'
import { stepsData } from '../assets/assets'
import {motion} from 'framer-motion'

export default function Steps() {
  return (
    <motion.div initial = {{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-32'>

    <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center '>How it works</h1>
    <p className='text-lg text-gray-600 mb-8 text-center'>Transform Words into Stunning Images</p>

    <div className=' w-full  text-sm flex flex-row flex-wrap justify-center items-center gap-4'>
        {stepsData.map((item, index)=>(
            <div className="w-full max-w-sm bg-white/60 rounded-3xl shadow-lg p-5 px-8 shadow-md  cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-[#8e61f1]" key={index}>
    
    <div className="flex flex-col items-center pb-2">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg " src={item.icon} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-[#8e62f1] ">{item.title}</h5>
        <span className="text-sm text-stone-600  text-center uppercase">{item.description}</span>
        
    </div>
</div>
        ))}
    </div>

        
    </motion.div>
  )
}
