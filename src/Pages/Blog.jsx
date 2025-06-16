import React from "react";
import sys1 from '../assets/sys-1.webp'
import sys2 from '../assets/sys-2.webp'
import sys3 from '../assets/sys-3.webp'
import sys4 from '../assets/sys-4.webp'
import sys5 from '../assets/sys-5.webp'
import sys6 from '../assets/sys-6.webp'
import sys7 from '../assets/sys-7.webp'
import sys8 from '../assets/sys-8.webp'
import sys9 from '../assets/sys-9.webp'

import Forms from "../components/Forms";


const articles = [
  {
    title: "Exploring the Different Types of Air Conditioning Systems",
    description:
      "What is an air conditioner? There are several different methods for chilling the air. When it comes to keeping the temperature inside a building at a suitable level, the air conditioner is really...",
    imageUrl: sys1,
  },
  {
    title: "How to Choose the Right-Sized Air Conditioner",
    description:
      "It's important to buy the right-sized air conditioner to stay comfortable and save energy. A big AC uses too much electricity and makes the air too suffocating while a small one won't cool your hom...",
    imageUrl: sys2, 
  },
  {
    title: "Reasons for Your Air Conditioner's Poor Performance",
    description:
      "Having a well-functioning air conditioner is important for year-round comfort. However, sometimes the AC may not work properly due to a few common issues. Don't worry though, most of these problems...",
    imageUrl: sys3,
  },
  {
    title: "The Right  Temperature for Your Refrigerator and Freezer",
    description:
      "What is an air conditioner? There are several different methods for chilling the air. When it comes to keeping the temperature inside a building at a suitable level, the air conditioner is really...",
    imageUrl: sys4,
  },
  {
    title: "5 Tips for Cleaning Your Refrigerator Properly",
    description:
      "It's important to buy the right-sized air conditioner to stay comfortable and save energy. A big AC uses too much electricity and makes the air too suffocating while a small one won't cool your hom...",
    imageUrl: sys5, 
  },
  {
    title: "Leveraging the Benefits of a Dual-Mode Air Conditioning System",
    description:
      "Having a well-functioning air conditioner is important for year-round comfort. However, sometimes the AC may not work properly due to a few common issues. Don't worry though, most of these problems...",
    imageUrl: sys6,
  },
  {
    title: "Refrigerator buying guide: What do I need to know",
    description:
      "What is an air conditioner? There are several different methods for chilling the air. When it comes to keeping the temperature inside a building at a suitable level, the air conditioner is really...",
    imageUrl: sys7,
  },
  {
    title: "How To Add Value To Your Home With An Air Conditioning Unit?",
    description:
      "It's important to buy the right-sized air conditioner to stay comfortable and save energy. A big AC uses too much electricity and makes the air too suffocating while a small one won't cool your hom...",
    imageUrl: sys8, 
  },
  {
    title: "What Are the Major Advantages of Inverter Air Conditioners?",
    description:
      "Having a well-functioning air conditioner is important for year-round comfort. However, sometimes the AC may not work properly due to a few common issues. Don't worry though, most of these problems...",
    imageUrl: sys9,
  },
];

const AirConditioningSection = () => {
  return (
     <>
    <div className=" max-w-[1200px] mx-auto mt-24">
        <a href="/home" className="text-[13px] text-[#282828] pl-2">Home /</a>  <span className="text-[13px] text-[#282828]">Blog</span>
        <h1 className="text-center text-[56px] text-[#282828] font-bold mt-2">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 px-14">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={article.imageUrl}
             
              className=" mb-4 object-contain w-full h-48"
            />
            <h3 className="text-[30px] text-[#282828] font-[700] mb-2 leading-8 pr-[11px]">
              {article.title}
            </h3>
            <p className="text-gray-600 text-[14px] pr-2 leading-6">{article.description}</p>
          </div>
        ))}
      </div>
      <Forms phone="23332233" email="33@gmail.com"/>
    </div>
    </>
  );
};

export default AirConditioningSection;
