import React from 'react';

const Login = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-gray-100 p-4">
      <div className=" rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-[48px] font-inter font-bold text-center tracking-tightest text-[#282828] mb-4">Login</h2>
        <p className="text-center text-gray-600 mb-8">Please enter your e-mail and password:</p>

        <form className="space-y-6 pt-10">
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border text-[#747474] border-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border text-[#747474] border-gray-300  p-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <a
              href="#"
              className="absolute right-3 top-3 text-[13px] font-[400] text-[#282828B3] underline hover:text-gray-800"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007ec6] hover:bg-blue-700 text-white font-semibold py-3 mt-3 transition duration-200"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-[#7e7786] ho mt-4">
          New customer?{' '}
          <a href="/account" className="text-[#8d8e8d] underline hover:text-gray-800">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
