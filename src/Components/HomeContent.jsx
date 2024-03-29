import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { PiGooglePhotosLogoBold } from "react-icons/pi";
import { LiaDonateSolid } from "react-icons/lia";
import { FaBuildingColumns } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoMdBookmarks } from "react-icons/io";

const HomeContent = () => {
  return (
    <div className="h-full">
      <div className="md:w-full lg:w-screen">
        {/* <ReactPlayer
                      url='../src/assets/homevideo.mp4'
                      width="50%"
                     height="50%"
                      loop={true}
                      playing={true}
                      controls={true}
                    /> */}
        {/* <video autoPlay muted loop className='w-5/5 pl-6 pr-6'>
        <source src="../src/assets/homevideo.mp4" />
      </video> */}
        <div className="relative">
          <video autoPlay muted loop className="w-screen ">
            <source src="../src/assets/homevideo.mp4" />
            <div className=" inset-0 bg-black opacity-70"></div>
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* 
  <div className='bg-green-100 p-16 h-screen sm:h-auto'>
  <div className='cards w-3/4 h-36 rounded-xl mx-auto justify-evenly bg-white p-6 flex '>
  <div className='card w-24 h-24 bg-green-50 items-center p-2 cursor-pointer' >
  <GiGraduateCap  className='w-20 h-64' />
    Courses
  </div>
  <div className='card w-24 h-24 bg-green-50 items-center p-3 cursor-pointer'>
  <SiGoogleclassroom  className='w-20 h-64' />
    InfraStructure
  </div>
  <div className='card w-24 h-24 bg-green-50 items-center p-2 cursor-pointer'>
    
  <FaBuildingColumns className='w-10 h-36'/>
    CollegeUnion
  </div>
  <div className='card w-24 h-24 bg-green-50 items-center p-2 cursor-pointer '>
  <PiGooglePhotosLogoBold className='w-20 h-64' />
    Gallery
  </div>
  <div className='card w-24 h-24 bg-green-50 items-center p-2 cursor-pointer'>
  <IoMdBookmarks  className='w-20 h-64' />
    Magazine
  </div>
  <div className='card w-24 h-24 bg-green-50 items-center p-2 cursor-pointer'>
  <LiaDonateSolid className='w-20 h-64' />
    Donate Us
  </div>
  
  </div>
</div> */}
        <div className="bg-green-100 p-6 sm:p-16 h-screen sm:h-auto">
          <div className="cards flex flex-col justify-center    sm:flex-row sm:flex-wrap ">
            <div className="card w-full sm:w-28 h-24 sm:h-28  bg-green-50 items-center p-2 hover:scale-105 cursor-pointer flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4">
              <GiGraduateCap className="w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2" />
              Courses
            </div>
            <div className="card w-full sm:w-28 h-24 sm:h-28 md:mx-10 bg-green-50 items-center p-2 hover:scale-105 cursor-pointer flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4">
              <SiGoogleclassroom className="w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2" />
              Infrastructure
            </div>
            <div className="card w-full sm:w-28 h-24 sm:h-28 bg-green-50 md:mx-10 items-center p-2 cursor-pointer hover:scale-105 flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4">
              <FaBuildingColumns className="w-10 h-10 sm:w-20  sm:h-20 mx-auto mb-2" />
              College Union
            </div>
            <div className="card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 md:mx-10 cursor-pointer flex flex-col hover:scale-105 justify-center text-center mb-4 sm:mb-0 sm:mr-4">
              <PiGooglePhotosLogoBold className="w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2" />
              Gallery
            </div>
            <div className="card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer md:mx-10 flex flex-col hover:scale-105 justify-center text-center mb-4 sm:mb-0 sm:mr-4">
              <IoMdBookmarks className="w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2" />
              Magazine
            </div>
            <div className="card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer md:mx-10 flex flex-col justify-center hover:scale-105 text-center">
              <LiaDonateSolid className="w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2" />
              Donate Us
            </div>
          </div>
        </div>

        <div className="w-screen bg-green-50 h-screen"></div>
      </div>
    </div>
  );
};

export default HomeContent;
