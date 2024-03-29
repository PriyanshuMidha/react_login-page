import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import Template  from "./components/Template";
function App() {
  const[islogin,setlogin]=useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col" >
      <Navbar islogin={islogin} setlogin={setlogin}>

      </Navbar>

      <Routes>
      <Route path="/" element= {<Home islogin={islogin}/>} />
      <Route path="/login" element = {<Login  setlogin={setlogin} />} />
        <Route path="/signup" element={<Signup  setlogin={setlogin} />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>



    </div>
  );
}

export default App;
