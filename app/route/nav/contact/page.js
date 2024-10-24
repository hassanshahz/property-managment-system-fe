'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const ContactUs = () => {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role');
  
    if (!role) {
      router.push('/');
      return;
    }
  
  }, [router]);
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please feel free to reach out to us for any queries or concerns. You can contact us via the provided email or phone number.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="leading-7 text-lg text-gray-900">App Name: Property Management System</h2>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="leading-7 text-lg text-gray-900">Owner: John Doe</h2>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="leading-7 text-lg text-gray-900">Phone: +123-456-7890</h2>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="leading-7 text-lg text-gray-900">Email: contact@pms.com</h2>
              </div>
            </div>
            <div className="p-2 w-full">
              <p className="leading-relaxed text-center text-base text-gray-600">
                For any inquiries, feel free to contact us via the phone number or email listed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
