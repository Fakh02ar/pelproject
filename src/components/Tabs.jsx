import React, { useState } from 'react';

const products = {
  bestSeller: [
    {
      name: 'PEL InverterOn Jumbo DC Prime Wifi T3 (H&C) Air Conditioner',
      price: 'From Rs.146,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL 525 Curved Glassdoor Dispenser',
      price: 'Rs.39,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL Refrigerator Glass Door',
      price: 'From Rs.179,000.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'Panasonic Inverter T3 (H&C) Air Conditioner',
      price: 'From Rs.136,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL InverterOn Jumbo DC Classic (H&C) Air Conditioner',
      price: 'From Rs.146,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL Washing Machine Fully Auto',
      price: 'From Rs.72,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL Majestic Glory Air Conditioner (Cool Only)',
      price: 'From Rs.145,000.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL 315 Smart Water Dispenser',
      price: 'Rs.36,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: true,
    },
  ],
  newArrival: [
    {
      name: 'PEL InverterOn Turbo DC Ultimate T3 (H&C) Air Conditioner',
      price: 'From Rs.139,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'Panasonic Inverter T3 (H&C) Air Conditioner',
      price: 'From Rs.156,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL 425 Flat Glassdoor Dispenser',
      price: 'Rs.38,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL Table-Top Classic 115 Water Dispenser',
      price: 'Rs.29,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL InverterOn AERO Extend (H&C) Air Conditioner',
      price: 'From Rs.130,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL InverterOn Refrigerator PRINVIO VCM',
      price: 'From Rs.90,900.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL Majestic Glory Air Conditioner (Cool Only)',
      price: 'From Rs.145,000.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
    {
      name: 'PEL DIGITRON InverterOn Flat Glassdoor Refrigerator',
      price: 'From Rs.111,500.00 PKR',
      img: 'https://via.placeholder.com/150',
      soldOut: false,
    },
  ],
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('bestSeller');

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-semibold mb-2">Collection</h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Explore Our Online Store Providing A Vast Range Of Innovative Home Appliances And Simply Make Your Home Smart.
      </p>

      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('bestSeller')}
          className={`border-b-2 pb-1 ${
            activeTab === 'bestSeller' ? 'border-black font-bold' : 'border-transparent text-gray-500'
          }`}
        >
          Best Seller
        </button>
        <button
          onClick={() => setActiveTab('newArrival')}
          className={`border-b-2 pb-1 ${
            activeTab === 'newArrival' ? 'border-black font-bold' : 'border-transparent text-gray-500'
          }`}
        >
          New Arrival
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products[activeTab].map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow hover:shadow-md transition p-2 relative text-center"
          >
            {product.soldOut && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                SOLD OUT
              </span>
            )}
            <img src={product.img} alt={product.name} className="w-full h-36 object-contain mb-2" />
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-sm text-gray-700 mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
