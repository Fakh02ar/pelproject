import React from "react";

const RegisterForm = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-gray-100 p-6">
      <div className="  p-10 w-full max-w-lg">
        <h1 className="text-[48px] font-bold text-center tracking-tightest text-gray-900 mb-2">Register</h1>
        <p className="text-center text-gray-600 mb-6">Please fill in the fields below:</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full text-[13px] bg-[#007ec6] hover:bg-blue-700 text-white font-semibold py-3"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#282828] underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
