import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import donate from '../../image/donate.jpg'
// import help from '../../image/help.jpg'
export default function CarouselSlider() {
    const sittings = {
        autoPlay: true,
        showArrows: true,
        showThumbs: false,
        infiniteLoop: true,
    }
    return ( 
        <Carousel className="overflow-hidden" {...sittings}>
            <div  >
            {/*   <p className="legend text-5xl">Donate and Be happy</p> */}
                <img src={donate} alt="" />
                {/* <p className="legend text-5xl">Donate and Be happy</p> */}
            </div>
            {/* <div>
                <img src="https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" alt="" />
                
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
                
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
                
            </div> */}
             
        </Carousel>
    );
};
