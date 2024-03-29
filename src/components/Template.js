import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
const Template = ({tittle,dec1,dec2,image,formtype,setlogin}) => {
  return (
    <div className='flex w-11/12 max-x-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px] mx-8' >
            <h1 className='text-richblack-5 font-semibold text-[1.85rem] loading-[2.375rem]'>{tittle}</h1>
            <p className='text-[1.25rem] loading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{dec1}</span><br></br>
                <span className='text-blue-100 italic'>{dec2}</span>
            </p>
            {formtype==="signup"?(<SignupForm setlogin={setlogin}></SignupForm>):(<LoginForm setlogin={setlogin}></LoginForm>)}

            <button>
                Sign Up with google 
            </button>
            

            
             
        </div>
        <div className='relative w-11/12 max-x-[450px]'>
              <img src={frameImage} width={400} height={420} loading='lazy' className='absolute right-8'></img>
              <img src={image} width={400} height={400} loading='lazy' className='absolute -top-1 right-4'></img>
            </div>
      
    </div>
  )
}

export default Template
