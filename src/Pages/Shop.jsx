import React, { useState } from 'react';
import ac from '../assets/img-ac.webp';
import bro from '../assets/bro-img.webp';
import tur from '../assets/tur-img.webp';
import gol from '../assets/gol-img.webp';
import inv from '../assets/inv-img.webp';
import frig from '../assets/frig-img.webp';
import frig2 from '../assets/frig-2.webp';
import red from '../assets/red-img.webp';
import img from '../assets/img-5.webp';
import open from '../assets/open-img.webp';
import pana from '../assets/pana.webp';
import sonic from '../assets/sonic.webp';
import rb from '../assets/rb.webp';
import coolar from '../assets/coolar.webp';
import col from '../assets/col-op.webp';
import life from '../assets/life-img.webp';
import life2 from '../assets/life-2.webp';
import jut from '../assets/jut-img.webp';
import jut2 from '../assets/jut-2.webp';
import pearl from '../assets/Pearl.webp';
import pearl2 from '../assets/pearl-2.webp';
import spinner from '../assets/spinner.webp';
import washing from '../assets/washing.webp';
import oven from '../assets/oven-img.webp';
import oven2 from '../assets/oven-2.webp';
import semi from '../assets/semi.webp';
import auto from '../assets/auto.webp';
import layer from '../assets/layer-img.webp';
import maroon from '../assets/Maroon-img.webp'; // ✅ Corrected capital M
import gray from '../assets/gray-mec.webp';
import mec from '../assets/mec-2.webp';
import steel from '../assets/steel-mec.webp';
import beach from '../assets/beach-col.webp';
import pel from '../assets/pel-col.webp';
import pel2 from '../assets/pel-2.webp';
import ultra from '../assets/ultra.webp';
import pro from '../assets/ultra-pro.webp';
import sim from '../assets/sim-pel.webp';
import sim2 from '../assets/sim-2.webp';
import micro from '../assets/micro-img.webp';
import micro2 from '../assets/micro-2.webp';
import glory from '../assets/glory.webp';
import glory2 from '../assets/glory-2.webp';
import silver from '../assets/Silver-img.webp';
import black from '../assets/black.webp';
import freezer from '../assets/freezer.webp';
import freez from '../assets/freez-2.webp';
import white from '../assets/white.webp';


const products = [
  { name: 'PEL InverterOn Jumbo DC Prime Wifi T3 (H&C) Air Conditioner', price: 'Rs.148,500.00 PKR', imageUrl: ac, hoverImage: ac },
  { name: 'PEL Life Pro Refrigerator', price: 'Rs.65,900.00 PKR', imageUrl: bro, hoverImage: gol },
  { name: 'PEL InverterOn Turbo DC Ultimate T3 (H&C) Air Conditioner', price: 'Rs.139,900.00 PKR', imageUrl: tur, hoverImage: inv },
  { name: 'PEL 525 Curved Glassdoor Dispenser', price: 'Rs.39,500.00 PKR', imageUrl: frig, hoverImage: frig2 },
  { name: 'PEL Refrigerator Glass Door', price: 'From Rs.71,900.00 PKR', imageUrl: red, hoverImage: img },
  { name: 'PEL Ultra InverterOn Glass Door Refrigerator', price: 'From Rs.101,900.00 PKR', imageUrl: img, hoverImage: open },
  { name: 'Panasonic Inverter T3 (H&C) Air Conditioner', price: 'From Rs.156,900.00 PKR', imageUrl: pana, hoverImage: sonic },
  { name: 'PEL 425 Flat Glassdoor Dispenser', price: 'Rs.38,500.00 PKR', imageUrl: frig, hoverImage: rb },
  { name: 'PEL 316 Premier Water Dispenser', price: 'Rs.37,900.00 PKR', imageUrl: coolar, hoverImage: col },
  { name: 'PEL Life Pro Refrigerator Room Series', price: 'Rs.39,500.00 PKR', imageUrl: life, hoverImage: life2 },
  { name: 'PEL 525 Curved Glassdoor Dispenser', price: 'From Rs.47,500.00 PKR', imageUrl: jut, hoverImage: jut2 },
  { name: 'PEL InverterOn Jumbo DC Classic ( H&C) Air Conditioner', price: 'from Rs.146,500.00 PKR', imageUrl: pearl, hoverImage: pearl2 },
  { name: 'PEL 215 Pearl Water Dispenser (Without Refrigerator Compartment)', price: 'Rs.35,500.00 PKR', imageUrl: spinner, hoverImage: washing },
  { name: 'PEL Washing Machine Semi Auto', price: 'From Rs.28,500.00 PKR', imageUrl: oven, hoverImage: oven2 },
  { name: 'PEL Classic Microwave', price: 'Rs.19,900.00 PKR', imageUrl: semi, hoverImage: auto },
  { name: 'PEL Washing Machine Semi Auto Twin Tub', price: 'Rs.42,500.00 PKR', imageUrl: layer, hoverImage: maroon },
  { name: 'PEL InverterOn Flat Glass Door Refrigerator', price: 'From Rs.95,900.00 PKR', imageUrl: gray, hoverImage: mec },
  { name: 'PEL Smart Washing Machine Fully Auto', price: 'From Rs.77,500.00 PKR', imageUrl: steel, hoverImage: beach },
  { name: 'PEL Washing Machine Fully Auto', price: 'From Rs.72,500.00 PKR', imageUrl: pel, hoverImage: pel2 },
  { name: 'PEL Table-Top Classic 115 Water Dispenser', price: 'Rs.29,900.00 PKR', imageUrl: ultra, hoverImage: pro },
  { name: 'PEL InverterOn AERO Extend (H&C) Air Conditioner', price: 'From Rs.130,900.00 PKR', imageUrl: sim, hoverImage: sim2 },
  { name: 'PEL InverterOn Refrigerator PRINVO VCM', price: 'From Rs.90,900.00 PKR', imageUrl: micro, hoverImage: micro2 },
  { name: 'PEL Convection Microwave Oven', price: 'From Rs.43,900.00 PKR', imageUrl: glory, hoverImage: glory2 },
  { name: 'PEL Majestic Glory Air Conditioner (Cool Only)', price: 'From Rs.114,500.00 PKR', imageUrl: silver, hoverImage: black },
  { name: 'PEL Silver Line 23 LTR Microwave Oven Digital', price: 'Sale priceRs.27,500.00 PKR', imageUrl: freezer, hoverImage: freez },
  { name: 'PEL Arctic Pro Deep Freezer - Single Door', price: 'From Rs.77,900.00 PKR', imageUrl: white, hoverImage: white },
];

const Shop = () => {
  const filters = ['Availability', 'Price', 'Product type'];
  const [openIndexes, setOpenIndexes] = useState({});
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [colorSearch, setColorSearch] = useState('');

  const toggleOpen = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const priceRanges = [
    { label: 'Below 50,000', min: 0, max: 50000 },
    { label: '50,001 - 100,000', min: 50001, max: 100000 },
    { label: 'Above 100,000', min: 100001, max: Infinity },
  ];

  const productTypes = ['Air Conditioner', 'Refrigerator', 'Microwave', 'Dispenser', 'Washing Machine', 'Freezer'];

  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price.match(/Rs\.?([\d,]+)/i);
    const numericPrice = priceMatch ? parseInt(priceMatch[1].replace(/,/g, '')) : 0;

    let matchesPrice = true;
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
      matchesPrice = numericPrice >= range.min && numericPrice <= range.max;
    }

    let matchesType = true;
    if (selectedProductTypes.length > 0) {
      matchesType = selectedProductTypes.some((type) =>
        product.name.toLowerCase().includes(type.toLowerCase())
      );
    }

    let matchesColor = product.name.toLowerCase().includes(colorSearch.toLowerCase());

    return matchesPrice && matchesType && matchesColor;
  });

  return (
    <div className="mt-15 bg-white p-8">
      <span className="text-gray-400">Home / </span><span>All products</span>
      <h1 className="text-center text-[56px] font-bold text-[#282828] pt-3">Shop</h1>

      <div className="flex flex-col md:flex-row gap-8 mt-20">
        <div className="w-full md:w-1/4">
          <div className="sticky top-24">
            <h2 className="text-[24px] font-semibold border-b border-gray-200 pb-[24px]">Filters</h2>
            <div>
              {filters.map((filter, idx) => (
                <div key={idx}>
                  <div
                    className="flex p-[21px] justify-between items-center cursor-pointer"
                    onClick={() => toggleOpen(idx)}
                  >
                    <span className="font-semibold text-[15px]">{filter}</span>
                    <span>
                      <i className={`fa-solid ${openIndexes[idx] ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </span>
                  </div>
                  {idx === 1 && openIndexes[idx] && (
                    <div className="pl-6 pb-4">
                      {priceRanges.map((range, i) => (
                        <div key={i} className="flex items-center mb-2">
                          <input
                            type="radio"
                            name="price"
                            placeholder="What do you like?"
                            checked={selectedPriceRange === range.label}
                            onChange={() => setSelectedPriceRange(range.label)}
                            className="mr-2"
                          />
                          <label>{range.label}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  {idx === 2 && openIndexes[idx] && (
                    <div className="pl-6 pb-4">
                      {productTypes.map((type, i) => (
                        <div key={i} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={selectedProductTypes.includes(type)}
                            onChange={() => {
                              setSelectedProductTypes((prev) =>
                                prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
                              );
                            }}
                            className="mr-2"
                          />
                          <label>{type}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  <hr className="text-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 className="text-[15px] text-[#282828]">{filteredProducts.length} Products</h2>
            <input
              type="text"
             placeholder="What do you like?"
              value={colorSearch}
              onChange={(e) => setColorSearch(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-[250px]"
            />
            <div className="text-gray-600">
              Sort by <span className="font-semibold">Featured <i className="fa-solid fa-angle-down"></i></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-lg group relative overflow-hidden">
                <div className="relative w-[277px] h-[277px] mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-contain w-full h-full group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <button className="w-62 bg-white hover:bg-gray-200 absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 text-[#282828] border border-gray-400 px-4 py-3 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-300">
                    Quick view
                  </button>
                </div>
                <h3 className="text-center text-[#282828] text-md font-[400] mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" id={`compare-${index}`} />
                  <label htmlFor={`compare-${index}`} className="text-sm text-gray-600">Add to Compare</label>
                </div>
                <p className="text-center text-gray-800 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
