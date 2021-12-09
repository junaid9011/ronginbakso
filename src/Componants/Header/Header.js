import React, { useContext, useEffect, useState } from 'react';
import logo from '../../image/RonginBakso.jpg';
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

// import './Header.css';
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [loggedIn,setLoggeIn]=useContext(userContext);
    const email=loggedIn.email;
    console.log(loggedIn)

  useEffect(() => {
    
      window.addEventListener("scroll", ()=>{
        if (window.scrollY >= 66) {
            setNavbar(true)
          } else {
            setNavbar(false)
          }
    })
  })

    return (
        <div className="">
         
      <nav className={(navbar)?"fixed hidden bg-gray-800 z-10 w-full  md:flex  justify-between h-20 text-center leading-10":"fixed bg-transparent z-10 w-full hidden md:flex  justify-between h-20 text-center leading-10"}>
      <div className="my-auto ml-10"><h1 className="text-white">RB</h1></div>
      <div className=" my-auto space-x-4  mr-2 text-2xl ">
        
      <Link className="text-red-500 hover:text-red-500" style={{textDecoration:'none'}} to="/"><span className="no-underline hover:text-red-500 rounded-md py-4 text-white px-2">Home</span></Link>
      <Link style={{textDecoration:'none'}} to="/"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">About </span></Link>
      <Link style={{textDecoration:'none'}} to="/"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">Blog </span></Link>
      <Link style={{textDecoration:'none'}} to="/"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">Donate</span></Link>
      <Link style={{textDecoration:'none'}} to="/"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">Voluenteers</span></Link>
      
      
      <Link to="/login"><input  className=" px-4 py-3 outline-none text-xl font-extrabold cursor-pointer leading-10 text-center box-border bg-red-500  border-red-500 rounded-lg text-white hover:bg-red-800" type="submit" value={email} />
      </Link>
      </div>
      
    </nav>
      
        </div>

    );
};

export default Header;