import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import pak from '../assets/pak.avif';

export default function Footer() {
  return (
    <footer className="bg-[#2f3136] text-gray-300 py-10">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-8">
        
        {/* About */}
        <div className="flex-1 min-w-[290px]">
          <h2 className="text-[13px] text-white font-semibold mb-4">About Our Store</h2>
          <p className="text-sm leading-relaxed text-white" >
            PEL has been operating since 1956 through technical collaboration with AEG. 
            In 1978 it was acquired by Saigol Group and went public a decade later. 
            PEL has consistently cooperated in the advancement and innovation of the 
            engineering sectors of Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[51px] pl-10">
          <h2 className="text-[13px] font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Catalog</a></li>
            <li><a href="/contact" className="hover:text-gray-400 text-white text-[15px] ">Contact Information</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Register Complaint</a></li>
            <li><a href="/privacypolicy" className="hover:text-gray-400 text-white text-[15px] ">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Refund Policy</a></li>
            <li><a href="/refund" className="hover:text-gray-400 text-white text-[15px] ">Refund Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-400 text-white text-[15px] ">Terms of Service</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div className="flex-1 min-w-[100px]">
          <h2 className="text-[13px] font-semibold mb-4 text-white">Shop</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px]">Air Conditioner</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Refrigerator</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Deep Freezer</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Water Dispenser</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">LED TV</a></li>
            <li><a href="#" className="hover:text-gray-400 text-whitetext-[15px] text-white ">Microwave Oven</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px] ">Washing Machine</a></li>
            <li><a href="#" className="hover:text-gray-400 text-white text-[15px]">Air Purifier</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-[1.5] min-w-[50px]">
          <h2 className="text-[13px] font-semibold mb-4 text-white">Newsletter</h2>
          <p className="text-[15px] mb-4 text-white">
            Subscribe to our newsletter for latest updates, promotions, exciting deals and discounts!
          </p>
          <form className="flex bg-[#2f3136] border border-gray-600 mb-4 overflow-hidden">
            <input 
              type="email" 
              placeholder="Your e-mail" 
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button 
              type="submit" 
              className="flex items-center justify-center px-4 text-white hover:text-gray-300 transition"
            >
              →
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-2 ">
          <a href="#" className="relative group hover:text-black p-4 border border-gray-500 overflow-hidden">
    <span className="absolute inset-0 bg-white translate-y-full hover:text-black group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
    <FaFacebookF className="relative z-10  hover:text-black" />
  </a>

  {/** Instagram */}
  <a href="#" className="relative group hover:text-black p-4 border border-gray-500 overflow-hidden">
    <span className="absolute inset-0  bg-white  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
    <FaInstagram className="relative z-10  hover:text-black" />
  </a>

  {/** YouTube */}
  <a href="#" className="relative group p-4 hover:text-black border border-gray-500 overflow-hidden">
    <span className="absolute inset-0 bg-white  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
    <FaYoutube className="relative z-10  hover:text-black" />
  </a>

  {/** LinkedIn */}
  <a href="#" className="relative group p-4 border hover:text-black border-gray-500 overflow-hidden">
    <span className="absolute inset-0 hover:text-black bg-white  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
    <FaLinkedinIn className="relative z-10  hover:text-black" />
  </a>
          </div>

          {/* Pakistan Standard Icon */}
          <div>
            <img src={pak} alt="Pakistan Standards" className="w-[100px] h-[70px]" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className=" text-white mt-10 pt-4 xl:pl-10 text-sm">
        © Copyright 2025 by Pak Elektron Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
