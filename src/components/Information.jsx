import React from 'react';
import { FaShippingFast, FaPhoneAlt, FaLock, FaEnvelope } from 'react-icons/fa';

const Information = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-[48px] font-bold  text-[#282828] mb-16">Shipping and Other Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center space-y-4">
          <FaShippingFast className="text-2xl  text-[#282828]" />
          <h3 className="text-lg font-semibold  text-[#282828]">Free Shipping</h3>
          <p className=" text-[#282828]">
            Free shipping across Pakistan and returns, customs and duties taxes included.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <FaPhoneAlt className="text-2xl  text-[#282828]" />
          <h3 className="text-lg font-semibold  text-[#282828]">Customer Service</h3>
          <p className=" text-[#282828]">
            We are available from Monday to Friday to answer your questions.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <FaLock className="text-2xl text-[#282828]" />
          <h3 className="text-lg font-semibold  text-[#282828]">Secure Payment</h3>
          <p className=" text-[#282828]">
            Your payment information is processed securely.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <FaEnvelope className="text-2xl text-[#282828]" />
          <h3 className="text-lg font-semibold  text-[#282828]">Contact Us</h3>
          <p className=" text-[#282828]">
            Need to contact us? Just send us an e-mail at{' '}
            <a href="mailto:ecom.orders@pel.com.pk" className=" text-[#282828] underline">
              ecom.orders@pel.com.pk
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Information;
