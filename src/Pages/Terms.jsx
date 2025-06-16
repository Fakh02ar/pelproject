import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle'
import { ThemeContext } from '../context/ThemeContext';

const Terms = () => {
  const { theme } = useContext(ThemeContext);

  const themeClass =
    theme === 'light'
      ? 'bg-white text-[#282828]'
      : 'bg-[#1e1e1e] text-white';

  return (
    <div className={`max-w-[1200px] mx-auto mt-30 p-6 ${themeClass}`}>
      <div className='max-w-[670px] mx-auto'>
        <ThemeToggle />

        <h1 className='text-center text-[48px] font-[700] mb-6'>Terms of service</h1>

        <h1 className='text-[15px] mt-10 font-[700] mb-1'>OVERVIEW</h1>
        <p className='text-[15px] leading-7 mb-3'>
          This website is operated by Pel Electronics...
          {/* [Truncated for brevity – your full content goes here] */}
        </p>

        <h1 className='text-[15px] mt-8 font-[700] mb-1'>SECTION 1 - ONLINE STORE TERMS</h1>
        <p className='text-[15px] leading-7 mb-3'>
          By agreeing to these Terms of Service, you represent that you are...
        </p>

        <h1 className='text-[15px] mt-8 font-[700] mb-1'>SECTION 2 - GENERAL CONDITIONS</h1>
        <p className='text-[15px] leading-7 mb-3'>
          We reserve the right to refuse Service to anyone for any reason...
        </p>
      </div>

     
    </div>
  );
};

export default Terms;
