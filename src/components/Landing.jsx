import React from 'react'
import useMediaQuery from '../assets/hooks/useMediaQuery';
import {motion} from "framer-motion"
import Background from  '../assets/pawel-czerwinski-LLBHaRrsA2Y-unsplash.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {TypeAnimation} from 'react-type-animation'
import { FaInstagram, FaLinkedin ,FaFacebook, FaTwitter} from 'react-icons/fa'

const Landing = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px )")
  
  return (
    <section id='home'>
       {/*IMAGE background SECTION*/}
      <img
           alt="profile"
           className="w-full h-screen object-cover object-bottom"
           src={Background}
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30 md:bg-transparent '> 
          <div className='max-w-[800px] m-auto h-full flex flex-col justify-center ' > 
          <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport ={{once:true, amount:0.5}}
        transition={{duration:0.5}} 
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: {opacity:1, x:0}
        }}
      >

      <h1 className='font-bold text-5xl sm:text-6xl pl-10 sm:pl-0'> Flower Gallery</h1>

      <h2 className= 'flex sm:text-3 text-2xl pt-4 pl-10 sm:pl-0'> Plants in your home  
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
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-500 pl-10 sm:pl-0'>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaFacebook className='cursor-pointer' size={20}/>
            <FaLinkedin className='cursor-pointer' size={20}/>
            <FaTwitter className='cursor-pointer' size={20}/>
          </div>
      </motion.div>
          </div>

      </div>
     
      
     
      
    
    
    </section>
  
   
  )
  }
  export default Landing
      
   
  
  
  {/*  <img className='w-full h-screen object-cover object-right' src= {Background} />
      
      
      <div className='w-full h-screen absolute top-0 left-0 bg-white/5 '> 
      <div className='max-w-[850px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center' >
          <h1 className='sm:text-6xl text-4xl font-bold text-black'> Flower Gallery</h1>
          <h2 className='flex sm:text-4xl text 2xl pt-4 text-black'> Plants in your home  
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
      
    
    
   
  
*/}