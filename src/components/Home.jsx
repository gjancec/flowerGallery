import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Background from  '../assets/wepik-export-202311010518404Mhk.png'
import {TypeAnimation} from 'react-type-animation'
import { FaInstagram, FaLinkedin ,FaFacebook, FaTwitter} from 'react-icons/fa'

const Home = () => {
  return (
    <div id='home'>
        <img className='w-full h-screen object-cover ' src={Background} />
        <div className=' absolute m-auto top-1/2  max-w-[1000px]  w-full flex flex-col justify-center items-center' >
          <h1 className='sm:text-5xl text-4xl font-bold text-white'> This is Flower Gallery</h1>
          <h2 className='flex sm:text-3xl text 2xl pt-4 text-white'> Flowers in your home  
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Revitalize your energy',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Enchance your mood',
        2000,
        'Reduce stress',
        2000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px'  }}
      repeat={Infinity}
    />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-300'>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaFacebook className='cursor-pointer' size={20}/>
            <FaLinkedin className='cursor-pointer' size={20}/>
            <FaTwitter className='cursor-pointer' size={20}/>
          </div>
          </div>
    
    </div>
  )
}

export default Home