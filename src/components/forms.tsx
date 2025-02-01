import React from "react";
import fundo from "../assets/img-1.jpg";
import Google from "../assets/google-icon-logo-svgrepo-com.svg";

const Forms = () => {
  return (
    <div className="w-full min-h-screen flex">
      <div className="relative w-1/2 h-screen flex flex-col">
        <img src={fundo} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute top-[25%] left-[10%] bg-orange-300 p-4 rounded-l-2xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-white">Turn your ideas into Reality</h1>
          <p className="text-xl font-medium text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora sit sapiente eum? Officia similique corporis esse nemo.
          </p>
        </div>
      </div>

      <div className="w-1/2 h-screen flex flex-col p-20 justify-center">
        <h1 className="text-xl text-black font-semibold mb-6">* Interactive Brand</h1>
        
        <div className="w-full flex flex-col">
          <h2 className="text-2xl font-serif font-semibold mb-4">Login</h2>
          <p className="text-sm mb-6">Welcome Back! Please enter your details.</p>
          
          <input 
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-4"
          />

          <input 
            type="password"
            placeholder="Password"
            className="w-full py-3 px-4 text-black border-b border-gray-300 outline-none focus:border-orange-400 transition-all mb-4"
          />

          <div className="w-full flex flex-col items-center">
            <button className="bg-black text-white w-full p-3 rounded-2xl m-2 hover:bg-gray-800">Login</button>
            <button className="border-2 text-black w-full p-3 rounded-2xl m-2 hover:bg-gray-200">Register</button>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute bg-white px-2">or</p>
            </div>
            
            <button className="border-2 text-black w-full p-2 flex items-center justify-center rounded-2xl m-2 hover:bg-gray-200"> 
              <img src={Google} className="h-6 mr-2" alt="Google logo" />Login with Google
            </button>
            
            <div className="w-full flex items-center mt-2">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Remember me?</p>
            </div>
            
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-2">Forgot Password?</p>
          </div>

          <p className="text-sm text-black text-center m-4">
            Don't have an account? <span className="font-semibold text-orange-500 cursor-pointer hover:underline">Sign Up Here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forms;