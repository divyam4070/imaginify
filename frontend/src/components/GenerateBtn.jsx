import { motion } from "framer-motion";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function GenerateBtn() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6">
        See the magic. Try now
      </h1>
      <button onClick={onClickHandler} className="cursor-pointer inline-flex items-center gap-2 sm:text-lg text-white w-auto m-auto hover:scale-105 transition-all duration-500 mt-8 px-12 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg ">
        {" "}
        Generate Image 🚀
      </button>
    </motion.div>
  );
}
