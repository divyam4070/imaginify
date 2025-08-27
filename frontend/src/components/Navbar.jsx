import React, {useContext} from "react";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
export default function Navbar() {
  const  {user, setShowLogin, logout, credit} = useContext(AppContext);
  
  const navigate = useNavigate();

  return (
    <div className="flex item-center justify-between py-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 bg-customPurple px-4 sm:px:6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img src={assets.credit_star} className="w-5 filter-white" alt="" />
              <p className="text-xs sm:text-sm font-medium text-white">CREDITS LEFT : {credit}</p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow"></img>
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md  text-sm">
                  <li onClick={logout} className="py-1 px-2 cursor-pointer pr-10">LOGOUT</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 ">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              PRICING
            </p>
            <button onClick={()=>setShowLogin(true)} className="shadow-lg bg-customPurple text-white px-7 py-2 sm:px-10 text-sm rounded-xl cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="20" className="inline text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg> LOGIN</button>
          </div>
        )}
      </div>
    </div>
  );
}
