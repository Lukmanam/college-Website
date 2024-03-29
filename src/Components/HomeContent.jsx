import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { PiGooglePhotosLogoBold } from "react-icons/pi";
import { LiaDonateSolid } from "react-icons/lia";
import { FaBuildingColumns } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoMdBookmarks } from "react-icons/io";








const HomeContent = () => {
  return (
    <div className='h-full'>
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
      
  <video autoPlay muted loop className='w-screen '>
    <source src="../src/assets/homevideo.mp4" />
    <div className=" inset-0 bg-black opacity-70"></div>
  </video>

<div className='bg-green-100 p-6 sm:p-16 h-screen sm:h-auto'>
      <div className='cards flex flex-col justify-evenly   sm:flex-row sm:flex-wrap '>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 hover:scale-105 cursor-pointer flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4'>
          <GiGraduateCap className='w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2' />
          Courses
        </div>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 hover:scale-105 cursor-pointer flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4'>
          <SiGoogleclassroom className='w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2' />
          Infrastructure
        </div>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer hover:scale-105 flex flex-col justify-center text-center mb-4 sm:mb-0 sm:mr-4'>
          <FaBuildingColumns className='w-10 h-10 sm:w-20 sm:h-20 mx-auto mb-2' />
          College Union
        </div>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer flex flex-col hover:scale-105 justify-center text-center mb-4 sm:mb-0 sm:mr-4'>
          <PiGooglePhotosLogoBold className='w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2' />
          Gallery
        </div>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer flex flex-col hover:scale-105 justify-center text-center mb-4 sm:mb-0 sm:mr-4'>
          <IoMdBookmarks className='w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2' />
          Magazine
        </div>
        <div className='card w-full sm:w-28 h-24 sm:h-28 bg-green-50 items-center p-2 cursor-pointer flex flex-col justify-center hover:scale-105 text-center'>
          <LiaDonateSolid className='w-20 h-20 sm:w-20 sm:h-20 mx-auto mb-2' />
          Donate Us
        </div>
      </div>
    </div>

                  </div>

    </div>
  )
}

export default HomeContent
