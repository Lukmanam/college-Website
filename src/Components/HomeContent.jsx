import React from 'react'
import ReactPlayer from 'react-player'


const HomeContent = () => {
  return (
    <div className='h-full bg-teal-100'>
  <div className="md:w-full lg:w-screen">
                    <ReactPlayer
                      url='../src/assets/homevideo.mp4'
                      width="100%"
                     height="80%"
                      loop={true}
                      playing={true}
                      controls={true}
                    />
                  </div>

    </div>
  )
}

export default HomeContent
