import React, {useEffect, useState ,useContext} from 'react';
import { Navbar ,Container,Nav} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { userContext } from '../../App';

// import './Header.css';
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [loggedIn]=useContext(userContext)
    const email=loggedIn?.email?.split('.')[0];
    //console.log(email)

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
      <Link style={{textDecoration:'none'}} to="/donate"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">Donate</span></Link>
      <Link style={{textDecoration:'none'}} to="/voluenteer"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">Voluenteers</span></Link>
      
      
      <Link to="/login">
        {email?
        <Link style={{textDecoration:'none'}} to="/"><span className="no-underline hover:pr-4 rounded-md py-4 text-white px-2">{email}</span></Link>
      :<input  className=" px-4 py-3 outline-none text-xl font-extrabold cursor-pointer leading-10 text-center box-border bg-red-500  border-red-500 rounded-lg text-white hover:bg-red-800" type="submit" value="Login" />
      
      }
      </Link>
      </div>
      
    </nav>
    <div className='md:hidden' >
    <Navbar fixed="top" collapseOnSelect expand="lg" bg={!navbar?"none":"dark"} variant={!navbar?"light":"dark"}>
  <Container className="" >
  <Navbar.Brand className={!navbar?" ms-3 fs-4 text-white  ": "ms-3 fs-4 text-light  "}href="#home">RB</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </Container>
  <Navbar.Collapse  className="ms-3 text-black me-1" id="responsive-navbar-nav">
    <Nav className="fs-4 text-light ">
    <Nav.Link  className={!navbar?"fs-4 text-black  ":"fs-4 text-light  "} href="about">About</Nav.Link>
    <Nav.Link  className={!navbar?"fs-4 text-black  ":"fs-4 text-light  "} href="about">Blog</Nav.Link>
    <Nav.Link  className={!navbar?"fs-4 text-black  ":"fs-4 text-light  "} href="/donate">Donate</Nav.Link>
    <Nav.Link  className={!navbar?"fs-4 text-black  ":"fs-4 text-light  "} href="/login">
      {email?<input  className=" px-2 py-2 outline-none text-lg font-bold cursor-pointer leading-8 text-center box-border bg-red-500  border-red-500 rounded-lg text-white hover:bg-red-800" type="submit" value="Login" />
      :
      <Nav.Link to='/profile'  className={!navbar?"fs-4 text-black  ":"fs-4 text-light  "} href="about">{email}</Nav.Link>
      }
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  
</Navbar> 
    </div>
        </div>
        

    );
};

export default Header;