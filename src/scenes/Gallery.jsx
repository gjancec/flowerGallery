
import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";







const container ={
  hidden:{},
  visible: {transition: {staggerChildren: 0.2}}
};

const galleryVariant ={
  hidden:{opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
}
{/*title ="Flower 1"
convert="flower-1"*/}

const FGallery =({title}) => {
  const gTitle = title.split(" ").join("-").toLowerCase();
  

  return(
    <motion.div variants={galleryVariant} className="relative">
      <div className='absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-gray-200 z-30 flex flex-col justify-center items-center text-center p-16 text-black'>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
        </p>
      </div>
    
       <img src={`../assets/${gTitle}.jpg`} alt={gTitle} />
     
        
      
   
      
    </motion.div>
  );
};

const Gallery=()=> {
    

  return (
    <section id="gallery" className="pt-48 pb-48"> 
{/*HEADINGS*/}
<motion.div
          className="md:w-2/4 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
         <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">GALLERY</span>
          </p>
          
          <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
          </div>
          </div> 
          <p className="mt-10 mb-10">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>
{/*GALLERY*/}
<div className="flex justify-center"> 
  <motion.div
      className="sm:grid sm:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container} 
      
    
  >
    
    {/*ROW 1*/}
    <div className="flex, justify-center text-center items-center p-10 bg-red-200
    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
      BEUTIFULL FLOWERS
    </div>
  <FGallery title="Flower 1" />
  <FGallery title="Flower 2" />
  {/*ROW 2*/}
  
  <FGallery title="Flower 3" />
  <FGallery  title="Flower 4" />
  <FGallery  title="Flower 5" />
  {/*ROW 3*/}
  
  <FGallery title="Flower 6" />
  <FGallery  title="Flower 7" />
  <div className="flex, justify-center text-center items-center p-10 bg-green-200
    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
      BEUTIFULL FLOWERS
    </div>
  </motion.div>

  </div>

    </section>
  )
}

export default Gallery