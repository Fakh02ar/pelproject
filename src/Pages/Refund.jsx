import React from 'react'
import  { useEffect, useState } from 'react';

const Refund = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto mt-30 mb-20'>
    <div className='max-w-[670px]  mx-auto'>
     <h1 className='text-center text-[48px] font-[700] text-[#282828] mb-6'>Refund policy</h1>
     <h1 className='text-[15px] mt-10 font-[700] text-[#282828] mb-1'>Refund</h1>
     <p className='text-[15px] leading-7 text-[#282828] mb-3'>This website is operated by Pel Electronics. Throughout the site, the terms “we”, “us” and “our” refer to Pel Electronics. Pel Electronics offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. <br /> <br />
     By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.  <br /> <br />

     Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br /> <br />

     Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br /> <br />
     Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.
     </p> 

     <h1 className='text-[15px] mt-8  font-[700] text-[#282828] mb-1'>SECTION 1 - ONLINE STORE TERMS</h1>
     <p className='text-[15px] leading-7 text-[#282828] mb-3'>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
You must not transmit any worms or viruses or any code of a destructive nature.
A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>

<h1 className='text-[15px] mt-8  font-[700] text-[#282828] mb-1'>SECTION 2 - GENERAL CONDITIONS</h1>
     <p className='text-[15px] leading-7 text-[#282828] mb-3'>We reserve the right to refuse Service to anyone for any reason at any time.
You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.
The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>

<ul>
        {users.map((user) => (
          <li className='text-2xl' key={user.id}>{user.title}</li> 
        ))}
      </ul>

</div>       
</div>
  )
}

export default Refund