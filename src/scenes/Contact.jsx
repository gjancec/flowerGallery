import React from 'react'
import {useForm} from 'react-hook-form'
import LineGradient from '../components/LineGradient';
import {motion} from 'framer-motion';
import Background from '../assets/pawel-czerwinski-LLBHaRrsA2Y-unsplash.jpg';


const Contact = () => {
  const{
    register,
    trigger,
    formState: {errors}
  } = useForm();


const onSubmit = async (e) => {
  const isValid = await trigger();
  if (!isValid) {
    e.preventDefault();
  }
}

  return (
  
    

    <section id="contact" className='relative bg-[#F1F2F4]'>
       {/*IMAGE background SECTION*/}
       <img
           alt="profile"
           className=" w-full h-screen object-cover  object-bottom"
           src={Background}
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 md:bg-white/50 '> 
<div className='py-48'>
      {/*HEADINGS*/}
<motion.div
          className='flex justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
         
         <div>
          <p className="font-playfair font-semibold text-4xl tracking-widest text-gray-800">
            CONTACT US IF YOU LIKE SOMETHING
          </p>
          <div className="flex justify-center mt-5">
          <div className='h-0.5 w-2/3 bg-[#4E684B]' />
          
          </div>
          
          </div> 
        </motion.div>
    {/*FORM*/}
    <div className='md:flex justify-center mt-5'>
          
          <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            <form 
      target="_blank"
      onSubmit={onSubmit}
      action='' 
      method='POST'
      className='flex flex-col max-w-[600px] w-full'
      >
      
        <input 
        className='p-2 bg-gray-100 border-2 border-[#4E684B]' 
        type="text" 
        placeholder='Name' 
        {...register('name',{
          required:true,
          maxLength:100,
        })} 
        />
        {errors.name && (
          <p className="text-red-500 mt-1">
            {errors.name.type === 'required' && "Name field is required."}
            {errors.name.type === 'maxLength' && "Max length is 100 char."}
          </p>
        )}
        <input className='my-4 p-2 bg-gray-100 border-2 border-[#4E684B]' type="email" placeholder='Email' name='email' 
         {...register('email',{
          required:true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        })} 
        
        />
        {errors.email && (
          <p className="text-red-500 mt-1">
            {errors.email.type === 'required' && "Email field is required."}
            {errors.email.type === 'pattern' && "Invalid email address."}
          </p>
        )}
        <textarea className='p-2 bg-gray-100 border-2 border-[#4E684B]' type="message" rows="4" placeholder='Message'
        {...register('message',{
          required:true,
          maxLength:2000
        })} 
        />
        {errors.message && (
          <p className="text-red-500 mt-1">
            {errors.message.type === 'required' && "Text field is required."}
            {errors.message.type === 'maxLength' && "Max length is 2000 char."}
          </p>
        )}
        <button type="submit" className= 'bg-[#D8608F] rounded-sm font-semibold  hover:bg-red-300 transition duration-500 px-8 py-3 my-4 mx-auto flex items-center'>
       
          Send
       </button>
      </form>
          </motion.div>
    </div>
    </div>
    </div>
    </section>
   
  )
}

export default Contact