import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setlogin}) => {
  return (
    <Template
      tittle="Join the millions learning to code with StudyNotion for free"
      dec1="Build skills for today, tomorrow, and beyond."
      dec2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setlogin={setlogin}
    />
  )
}

export default Signup