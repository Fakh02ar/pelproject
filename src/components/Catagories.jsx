import React from "react";
import Dc from "../assets/tu.png"; 
import refe from "../assets/refe.png"; 
import image3 from '../assets/image3.png'
import oven from '../assets/oven.png'

import image2 from '../assets/image2.png'




const Categories = () => {
  return (
    <section className="bg-white py-12 xl:px-20 md:px-12 max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#282828] text-[13px] font-[700] tracking-1px">
          Discover Luxurious And High-Quality Home Appliances For A Finer Lifestyle.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#282828]">Categories</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Air Conditioner Card */}
        <div
          className="relative h-80 hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
           
            backgroundImage: `url(${Dc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-12 h-full w-[50%]">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#282828]">
                Air<br />Conditioner
              </h3>
              <p className="text-[#282828] font-[500] mb-6 leading-5 pt-3">
                Beat The Scorching Heat With Our High Duty Inverter Air Conditioners.
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>

        {/* Refrigerator Card */}
        <div
          className="relative h-[303px] mt-[9px] hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
            backgroundImage: `url(${refe})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-14 h-full w-[47%]">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#282828]">Refrigerator</h3>
              <p className="text-[#282828] font-[500] mb-6 leading-5 pt-3">
                Freshness Redefined With Intelligent Digital Inverter Technology
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>
      </div>




      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Dispancer   Card */}
        <div
          className="relative h-75 hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
           
            backgroundImage: `url(${image3})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-12 h-full w-[50%]">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#282828]">
                Water<br /> Dispenser
              </h3>
              <p className="text-[#282828] font-[500] mb-6 leading-5 pt-3">
              Wide range of One-press Changeable Water Technology Dispensers.
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>

        {/* oven Card */}
        <div
          className="relative h-[301px] hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
            backgroundImage: `url(${oven})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-14 h-full w-[50%]">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#282828]">Microwave</h3>
              <p className="text-[#282828] font-[500] mb-6 leading-5 pt-3">
              Save time and produce fast, efficient cooking and grilling outputs.
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Dispancer   Card */}
        <div
          className="relative h-75 hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
           
            backgroundImage: `url(${Dc})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-12 h-full w-[50%]">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#282828]">
              Inverter
              </h3>
              <p className="text-[#282828] font-[500] mb-6 leading-5 pt-3">
                Beat The Scorching Heat With Our High Duty Inverter Air Conditioners.
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>

        {/* oven Card */}
        <div
          className="relative h-[301px] hover:transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 p-8 flex-col pt-14 h-full w-[55%]">
            <div>
              <h3 className="text-2xl font-[500] mb-2 text-[#282828]">Washing  Machine</h3>
              <p className="text-[#282828] font-[500] mb-6 pt-3 leading-5">
              Noiseless and extra-efficient washing companion with sufficient capacity
              </p>
              <a href="#" className="text-[#282828] text-[13px] font-semibold underline">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Categories;
