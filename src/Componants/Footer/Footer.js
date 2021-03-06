// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-gray-800">
            <footer classeName="footer">
  		 <div className="container">
  	 	<div className="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul className="ml-10">
  	 				<li><a href="about" rel="noreferrer">about us</a></li>
  	 				<li><a href="goals" rel="noreferrer">our goals</a></li>
  	 				<li><a href="p" rel="noreferrer">privacy policy</a></li>
  	 				{/* <li><a href="#">affiliate program</a></li> */}
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul className="ml-10">
  	 				<li><a href="faq" rel="noreferrer">FAQ</a></li>
  	 				<li><a href="c" rel="noreferrer">Contact Us</a></li>
  	 				{/* <li><a href="cp" rel="noreferrer"></a></li> */}
  	 				
  	 			</ul>
  	 		</div>
  	 		{/* <div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				{/* <a href="#"><FontAwesomeIcon icon={fdfd}/></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
		   
  	 </div>
	   
  </footer>
  <div className="note">
	<small >All right reserved by @RonginBakso</small>
  </div>
        </div>
    );
};

export default Footer;