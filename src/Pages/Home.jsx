import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HomeContent from '../Components/HomeContent'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      {/* <div className='Navbar bg-cyan-700 w-screen h-10 ' > */}
      <Navbar/>  
      {/* </div> */}
      <HomeContent/>
      <Footer/>
       
        
    

    </div>
  )
}

export default Home
