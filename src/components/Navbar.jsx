import React, {useState} from 'react'

{/*FaBars hamburger, FaTimes cross*/}
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/react.svg'

const Navbar = () => {
{/*handle click on hamburger*/}
const [nav, setNav]=useState(false)
const handleClick = () =>setNav(!nav)

  return (
    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-white'>
      { /*menu logo*/}
      <div>
        <img src={Logo} alt="Logo Image" style={{width:'50px'}} />
      </div>
      
      
       { /*menu mobile first, @media (min-width: 768px) {
                              .md\:flex {
                                  display: flex;
                              }
      }*/}
        
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    

    {/*Hamburger biger medium hide, z index order of overlapping HTML elements, higher index on top of lower index*/}
    <div onClick={handleClick} className ='md:hidden z-10'>
     {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/*Mobile menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Gallery</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Contact</li>
    </ul>
    {/*Social icons*/}
<div className='flex fixed flex-col top-[35%] left-0'>
  
  
</div>

    </div>
  )
}
export default Navbar