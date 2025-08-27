import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import {motion} from 'framer-motion'

export default function Testimonials() {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}} 
    className="flex flex-col items-center justify-content my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
      <p className="text-gray-600 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="bg-white/80 p-12 rounded-lg shadow-lg border border-[#8e61f1] w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img src={testimonials.image} className="shadow-lg rounded-full w-14"></img>
              <h2 className="text-xl font-semibold mt-3 text-[#8e62f1]">{testimonials.name}</h2>
              <p className="text-gray-500 mb-4">{testimonials.role}</p>
              <div className="flex mb-4">
                {Array(testimonials.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star}></img>
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600 uppercase">{testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
