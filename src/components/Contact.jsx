import React from 'react'
import {useForm} from 'react-hook-form'


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
    <div  name='contactForm' className='w-full h-screen  flex justify-center items-center p-4'> 
      
      
      <form 
      target="_blank"
      onSubmit={onSubmit}
      action='' 
      method='POST'
      className='flex flex-col max-w-[600px] w-full'
      >
       <div className='pb-3'>
          <p className='text-3xl font-bold inline border-b-4 border-gray-500 text-gray-800'>Contact</p>
          <p className='text-gray-800 py-4'> Send message</p>
          
        </div> 
        <input 
        className='p-2 bg-gray-200 border-2 border-gray-800' 
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
        <input className='my-4 p-2 bg-gray-200 border-2 border-gray-800' type="email" placeholder='Email' name='email' 
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
        <textarea className='p-2 bg-gray-200 border-2 border-gray-800' type="message" rows="4" placeholder='Message'
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
        <button type="submit" className='text-gray-800 border-2  border-gray-800 hover:bg-gray-400 hover:border-gray-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Send
       </button>
      </form>
    </div>
  )
}

export default Contact