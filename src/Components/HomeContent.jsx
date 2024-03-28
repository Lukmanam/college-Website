import React from 'react'
import ReactPlayer from 'react-player'


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
                      <video autoPlay muted loop className='w-5/5 pl-6 pr-6'>
        <source src="../src/assets/homevideo.mp4" />
      </video>
                  </div>

    </div>
  )
}

export default HomeContent
