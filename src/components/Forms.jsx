import React, { useState } from 'react';

const Forms = ({ phone = '042 38020200', email = 'ecom.orders@pel.com.pk' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-60 px-6 md:px-20 py-16">
      {/* Left: Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[48px] text-[#282828] font-bold mb-8">Get In Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-[15px] p-3 border border-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-[15px] p-3 border border-gray-300"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full text-[15px] p-3 border border-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-[#007EC6] hover:bg-blue-700 text-white font-bold py-3 px-8 text-[13px] w-full"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right: Contact Info */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[48px] font-bold mb-8 text-[#282828]">Contact info</h2>
        <div className="text-lg pl-8">
          <div>
            <strong className='text-[15px] text-[#282828]'>Address</strong>
            <p className='text-[15px] font-light'>14km, Ferozepur Road, Lahore</p>
          </div>
          <div>
            <strong className='text-[15px] text-[#282828]'>Phone</strong>
            <p className="text-[#282828] text-[15px] underline">{phone}</p>
            <p className='text-[15px] font-light text-[#282828]'>(Mon - Sat / 10:00AM - 06:00PM)</p>
          </div>
          <div>
            <strong className='text-[15px] text-[#282828]'>Email</strong>
            <p className="text-[#282828] text-[15px] underline">{email}</p>
          </div>
          <div>
            <strong className='text-[15px] text-[#282828]'>WhatsApp</strong>
            <p className="text-[#282828] text-[15px] underline">{phone}</p>
            <p className='text-[15px] text-[#282828]'>(Mon - Sat / 10:00AM - 06:00PM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
