import { FaInstagram, FaLinkedin ,FaFacebook, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return (
      <footer className="h-64 bg-red pt-10">
        <div className="w-10/12 mx-auto">
        <div className='flex justify-center md:justify-start my-4 gap-7 text-gray-600'>
            <a 
             className='hover:opacity-50 transition duration-500' 
             size={20}
             href="https://www.instagram.com/"
             target="_blank"
             rel="noreferrer"
            >
            <FaInstagram size={20} />
            </a>
            <a 
              className='hover:opacity-50 transition duration-500' 
              size={20}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              >
                <FaFacebook size={20}/>
             </a>
            
            
            <a 
              className='hover:opacity-50 transition duration-500' 
              size={20}
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              >
                <FaLinkedin size={20}/>
             </a>
             <a 
              className='hover:opacity-50 transition duration-500' 
              size={20}
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              >
                <FaTwitter  size={20}/>
             </a>
            
          </div>
                   <div className="md:flex justify-center md:justify-between text-center ">
            <p className="font-playfair font-semibold text-2xl text-yellow">
              FLOWER GALERY
            </p>
            <p className="font-opensans text-md text-yellow">
              ©2023 FSHOP. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;