import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'
const Navbar = (props) => {
    let islogin=props.islogin;
    let setlogin=props.setlogin;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} width={160} height={32} loading='lazy'></img>
      </Link>

      <nav>
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home  </Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>


      <div className='flex ml-5 mr-3 gap-3'>
        {!islogin&&
            <Link to="/login">
                <button className='bg-richblack-80 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                >Login</button>
            </Link>
        }
        {!islogin&&
            <Link to="/signup">
                <button className='bg-richblack-80 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up </button>
            </Link>
        }
        {islogin&&
            <Link to="/">
                <button onClick={()=>{
                    setlogin(false);
                    toast.success("logout")
                }} className='bg-richblack-80 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Logout </button>
            </Link>
        }
        {islogin&&
            <Link to="/dashboard">
                <button className='bg-richblack-80 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
