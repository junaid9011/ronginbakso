import React,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
const Planning = () => {
    useEffect(() => {
        Aos.init({ duration: 10000 });
    }, [])
    return (
        <div data-aos="fade-out"  className=" w-100  p-4 text-center ">
            <h1 className="py-10 text-gray-400 font-semibold text-2xl hover:text-gray-800 border-b">GOALS</h1>
            <div  className="sm:flex pt-2 justify-around">
                <div  data-aos="fade-out" className=" md:w-1/4 ">
                    <h1 className=" text-2xl font-medium">Help</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quae asperiores unde, culpa eveniet corporis aspernatur officia corrupti modi consequuntur iste hic consequatur, nihil quidem accusamus magni sunt, eligendi sequi!</p>
                </div>
                <div data-aos="fade-out" className="md:w-1/4">
                    <h1 className="md:mx-30  text-2xl font-medium ">Donate</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eligendi libero, consequuntur laborum pariatur ab amet minus optio in qui sit nostrum, placeat similique illum rem hic sed aperiam inventore commodi!</p>
                </div>
                <div data-aos="fade-out" className="md:w-1/4">
                    <h1 className=" text-2xl font-medium">Plant Trees </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae eius distinctio eaque quas consequatur! Amet quisquam, voluptatum minima nostrum debitis commodi eaque vel, aspernatur officia inventore nulla quos sed.</p>
                </div>
                <div data-aos="fade-out" className="md:w-1/4">
                    <h1 className=" text-2xl font-medium">Education </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt hic eligendi maiores possimus in ducimus, aliquam veritatis repudiandae sed repellendus nemo? Modi sunt temporibus officiis tenetur ipsum numquam vel magnam.</p>
                </div>
            </div>
            
            
        </div>  
    );
};

export default Planning;