'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const updates = () => {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role');
  
    if (!role) {
      router.push('/');
      return;
    }
  
  }, [router]);
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center" src="https://images.unsplash.com/photo-1629904888099-00285934292b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Owner</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Admin</h1>
            <p className="leading-relaxed mb-3">Streamline Your Property Management with Our All-in-One System</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center" src="https://images.unsplash.com/photo-1629904888099-00285934292b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Property</h1>
            <p className="leading-relaxed mb-3">"Streamline Your Property Management with Our All-in-One System"</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-contain object-center" src="https://images.unsplash.com/photo-1629904888099-00285934292b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRldmVsb3BlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Developer</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Nmae</h1>
            <p className="leading-relaxed mb-3">"Streamline Your Property Management with Our All-in-One System"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default updates
