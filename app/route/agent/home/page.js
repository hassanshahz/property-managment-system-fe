'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const AgentHome = () => {
    const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role');
  
    if (!role) {
      router.push('/');
      return;
    }
  
    try {
      if (role !== 'agent') {
        router.push('/hoc/unAuthorization');
      }
    } catch (error) {
      alert("Your session has expired or is invalid. Please log in again.");
      router.push('/');
    }
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <section className="text-gray-400 body-font [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-cover">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center mx-auto">
            <div className="flex items-center">
              <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-white">
                Agent Home
              </h1>
              <Image
                src="/Layers-Gradient.gif"
                alt="Pencil Gif"
                unoptimized
                width={55}
                height={55}
                className="object-contain pb-2 ml-3"
              />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400">
              "Take control of your contacts with advanced features designed for efficient admin oversight."
            </p>
          </div>
          
          {/* Flex container for the two boxes */}
          <div className="flex flex-wrap justify-center -m-4">
            {/* Create Property Section */}
            <div className="p-4 lg:w-1/2 md:w-1/2 w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                  <Image
                    src="/Admin-Contact-Gradient.gif"
                    alt="Logo"
                    unoptimized
                    width={80}
                    height={70}
                    className="aspect-auto object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Create Property
                  </h2>
                  <p className="leading-relaxed text-base">
                    "Centralize and manage contacts effortlessly, giving admins the insights they need to succeed."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/user/createProperty"
                  >
                    Create
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AgentHome;
