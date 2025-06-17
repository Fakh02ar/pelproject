import React from 'react';
import logo from '../assets/pel-1.png';
import AEG from '../assets/AEG.png';
import fuji from '../assets/fuji.png';
import hitac from '../assets/hitac.png';
import carrier from '../assets/carrier.png';
import LG from '../assets/LG.png';
import LV from '../assets/Lv.avif';

const About = () => {
  const timelineData = [
    {
      year: '1956',
      logo: logo,
      title: 'PEL Company was established.',
    },
    {
      year: '1958',
      logo: AEG,
      title: 'Technical collaboration agreement reached with AEG Germany and PEL.',
    },
    {
      year: '1978',
      logo: logo,
      title: 'PEL acquired by Saigol Group of Companies.',
    },
    {
      year: '1981',
      logo: fuji,
      title: 'Manufacturing of air conditioners with assistance of Fujitsu, Japan.',
    },
    {
      year: '1988',
      logo: hitac,
      title: "'Acquired license to manufacture VCB's from Hitachi, Japan.",
    },
    {
      year: '1958',
      logo: carrier,
      title: 'Technical collaboration agreement reached with AEG Germany and PEL.',
    },
    {
      year: '1978',
      logo: LG,
      title: 'PEL acquired by Saigol Group of Companies.',
    },
    {
      year: '1981',
      logo: LV,
      title: 'Manufacturing of air conditioners with assistance of Fujitsu, Japan.',
    },
  ];

  return (
    <>
      <div className='mt-24 max-w-[1200px] mx-auto'>
        <a href="/home" className='text-gray-400 pl-3 '>Home /</a> <span>About PEL</span>
        <h1 className='text-[48px] text-center font-bold text-[#282828] pt-4 pb-10'>About PEL</h1>

        <h2 className='mt-6 px-10 text-[26px] font-[700]'>There is a Pel In every home!</h2>
        <p className='px-10 text-[15px] pt-4 leading-7 text-[#282828]'>
          PEL contributes in your lives every day, by providing you not just appliances for a better lifestyle...
        </p>

        <hr className='my-8 mx-10 text-gray-200' />

        <h2 className='mt-6 px-10 text-[26px] font-[700]'>We are here to “Change your life”.</h2>
        <p className='px-10 text-[15px] pt-4 leading-7 text-[#282828] pb-8'>
          Since its inception, PEL has been operating keeping in view the philosophy of innovation and advancement...
        </p>

        <div className='flex gap-1 px-10'>
          <div className='w-[50%]'>
            <h2 className='pb-6 text-[26px] font-[700]'>Vision</h2>
            <p className='text-[14px] leading-7 text-[#282828]'>
              To excel in providing engineering goods and services through continuous improvement.
            </p>
          </div>
          <div className='w-[50%]'>
            <h2 className='pb-6 text-[26px] font-[700]'>Mission</h2>
            <p className='text-[14px] font-[400] leading-7 text-[#282828]'>
              To provide quality products and services to the complete satisfaction of our customers...
            </p>
          </div>
        </div>

        <hr className='mt-10 mb-6 mx-10 text-gray-200' />
        <h1 className='text-[26px] pl-10 pb-10 font-bold text-[#282828]'>Our History</h1>

        {/* Timeline Section */}
        <div className="flex flex-col gap-24 px-10 pb-20 relative">
          {timelineData.map((item, index) => (
            <div key={index} className="flex items-start gap-20 relative">
              {/* Left Logo with Circle - Only visible on md screens and up */}
              <div className="hidden md:block relative flex-shrink-0 w-36 h-36">
                <div className="h-[160px] relative bg-[url('/src/assets/thumb.webp')] bg-cover w-[227px] bg-center p-1">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 w-[145px] h-[150px]"
                  />
                </div>
              </div>

              {/* Text Box */}
              <div
                className="border border-t-5 border-t-[#0088cc] border-gray-200 rounded-md p-6 w-full flex items-center gap-6 pb-14"
                style={{ background: "linear-gradient(to bottom, #fff 1%, #f9f9f9 98%)" }}
              >
                <p className="text-[#0088cc] font-bold text-xl">{item.year}</p>
                <p className="text-[#282828] text-[14px] font-[400]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
    