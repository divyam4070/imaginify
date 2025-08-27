import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial = {{opacity:0.2, y:100}} transition={{duration:1}}
    whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <motion.div className='text-stone-600 text-center inline-flex gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial = {{opacity:0, y:-20}}
    animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}>
            <p>Best text to image generator</p>
            <img src={assets.star_icon}></img>
        </motion.div>
        <motion.h1 className='font-PermanentMarker text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:2}}>Turn Your Words Into <span className='font-PermanentMarker bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>Visual Magic.</span>🔮</motion.h1>

        <motion.p className='text-center text-[#8e61f1] max-w-xl mx-auto mt-5 '
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{delay: 0.6, duartion:0.8}}>Unleash your inner artist 👩‍🎨. Descibe any wild dream, and watch out AI paint it into existence with breathtaking detail.</motion.p>
        <motion.button onClick={onClickHandler} className='sm:text-lg text-white w-auto mt-8 px-12 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg cursor-pointer'
        whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}> Generate Image 🚀</motion.button>

        <motion.div
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:1}} className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(6).fill('').map((item,index)=>(
                <motion.img
                whileHover={{scale:1.05, duration:0.1}} className= 'rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2 === 0 ? assets.sample_img_1 : assets.sample_img_2} key={index} width={70}></motion.img>
            ))}
            
        </motion.div>
        
        <motion.p 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2, duration:0.8}}
        className='mt-2 text-neutral-600'>Generated images from imaginify</motion.p>
    </motion.div>
  )
}
