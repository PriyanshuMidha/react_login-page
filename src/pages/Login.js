import React from 'react'

import loginImg from "../assets/login.png"
import Template from '../components/Template'
const Login = ({setlogin}) => {
  return (
    <Template
      tittle="Welcome Back"
      dec1="Build skills for today, tomorrow, and beyond."
      dec2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setlogin={setlogin}
    />
  )
}

export default Login