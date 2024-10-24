"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

const Admin = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <section className="text-gray-400 body-font [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-cover ">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center mx-auto">
            <div className="flex items-center ">
              <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 text-white">
                Admin Property Management System
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

          {/* Buttons to Create Agency, Agent, and User */}
          <div className="flex flex-wrap justify-center space-x-4 mb-10">
            <Link href="/route/admin/createAgency">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Create Agency
              </button>
            </Link>
            <Link href="/route/admin/createAgent">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Create Agent
              </button>
            </Link>
            <Link href="/route/admin/createUser">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Create User
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* User's Details Section */}
            <div className="p-4 lg:w-1/2 md:w-full">
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
                    User's Details
                  </h2>
                  <p className="leading-relaxed text-base">
                    "Centralize and manage contacts effortlessly, giving admins the insights they need to succeed."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/admin/user"
                  >
                    Show Users
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

            {/* Agent's Details Section */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <Image
                    src="/Admin-Contacts-Gradient.gif"
                    alt="Logo"
                    unoptimized
                    width={80}
                    height={70}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Agent's Details
                  </h2>
                  <p className="leading-relaxed text-base">
                    "Streamline your contact management process with powerful admin tools for optimal organization."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/admin/agent"
                  >
                    Show Agents
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

            {/* Agencies Details Section */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <Image
                    src="/Computer-Display-Gradient.gif"
                    alt="Logo"
                    unoptimized
                    width={80}
                    height={70}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Agencies Details
                  </h2>
                  <p className="leading-relaxed text-base">
                    "As an administrator, you can assign tasks to users to ensure efficient project management and accountability."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/admin/agency"
                  >
                    Show Agencies
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

            {/* Property List Section */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <Image
                    src="/Document-Task-Gradient.gif"
                    alt="Logo"
                    unoptimized
                    width={80}
                    height={70}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Property List
                  </h2>
                  <p className="leading-relaxed text-base">
                    "On this page, you can view and manage the tasks assigned to users within your organization."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/admin/property"
                  >
                    View List
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

            {/* Total Amount Section */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <Image
                    src="/Growth-Gradient2.gif"
                    alt="Logo"
                    unoptimized
                    width={80}
                    height={70}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    Create Meeting
                  </h2>
                  <p className="leading-relaxed text-base">
                    "User Task Payment Overview page, where you can efficiently track payment status of tasks assigned to users."
                  </p>
                  <Link
                    className="mt-3 text-white hover:text-indigo-600 inline-flex items-center"
                    href="/route/admin/createMeeting"
                  >
                    Create Meeting
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

export default Admin;
