import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/logo.png'
export default function Footer() {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={logo} width={150}></img>
        <p className='flex-1 border-l border-[#8e62f1] pl-4 text-sm text-gray-500 max-sm:hidden uppercase'>Copyright @Divyam.fun | All rights reserved.</p>
        <div className='flex gap-2.5'>
            <img src={assets.email_icon} width={35}></img>
            <img src={assets.twitter_icon} width={35}></img>
            <img src={assets.instagram_icon} width={35}></img>
        </div>
    </div>
  )
}
