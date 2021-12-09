import React from 'react';
import Carousel from 'react-elastic-carousel'
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import jnd from '../../image/committee/junaid.jpg'
import mhd from '../../image/committee/mhd.jpg'
import rmn from '../../image/committee/rmn.jpg'
import mahmud from '../../image/committee/mahmud.JPG'
import shamim from '../../image/committee/shamim.jpg'
import hemo from '../../image/committee/hemo.JPG'
import abdl from '../../image/committee/abdl.jpg'
import  './Committe.css';
const Committee = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3,itemsToScroll: 2,pagination: false,  },
        // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        // { width: 1450, itemsToShow: 5 },
        // { width: 1750, itemsToShow: 6 },
      ];
      const users= [
        {id: 1, title: "Shamim Miah",position:"President",image:shamim,fb:"https://www.facebook.com/Shamimrfll.miah.31586",phone:"tel:0177404141"},
        {id: 2, title: "Abdullah Al Mahmud",position:"Accountant",image:mahmud,fb:"https://www.facebook.com/mahmudali.niloy",phone:"tel:01791541550"},
        {id: 3, title: "Remon khan Kuyasha",position:"Co-Accountant" ,image:rmn ,fb:"",phone:"01521763702"},
        {id: 4, title: "Junaid Ahmed",position:"IT Admin" ,image:jnd ,fb:"https://www.facebook.com/2a6m9x",phone:"tel:01762143370"},
        {id: 5, title: "Mahadi Hasan",position:"Fund Collector",image:mhd ,fb:"https://www.facebook.com/mahadih392",phone:"tel:01763922557"},
        
        {id: 6, title: "Rashadul Islam Hemu",position:"Tree Planter" ,image:hemo ,fb:"https://www.facebook.com/here.king.18",phone:"tel:01798585244"},
        {id: 7, title: "Abdullah Al Mahmud",position:"Tree Planter" ,image:abdl ,fb:"https://www.facebook.com/Md.abdulla743",phone:"tel:"}
        
        // {id: 7, link:"" title: "",position:"",image:""},
        // {id: 1, title: "",position:"",image:""},
        // {id: 1, title: "",position:"",image:""},
        // {id: 1, title: "",position:"",image:""},
        // {id: 1, title: "",position:"",image:""},
        // {id: 1, title: "",position:"",image:""},

        
      ]
    
    
    return (
    
        <div className="py-4 my-4 ">



            <div className="text-center">
                <h1>COMMITTEE</h1>
            </div>
            
                {/* card */}
            <div className="w-full">
            <Carousel   breakPoints={breakPoints} >
            {users.map(user =>
                 <div className="">
                    
                    <div className="my-4 md:w-64 px-2 mx-4  py-4 border-2  rounded-xl  bg-gray-200 shadow text-center">
                            <div className="">
                            <img src={user.image} className=" mx-auto w-full img" alt="" />
                            </div>
                            
                            <div className="mx-0 text-center">
                                <h1>{user.title} </h1>
                                <h4>{user.position}</h4>
                                <h5 className=" w-full" >
                                    <div className=" w-full space-x-2 flex justify-center">
                                    <a target="_blank" rel="noreferrer" href={user.fb}> <BsFacebook className=""/></a>
                                    <a target="_blank" rel="noreferrer" href={user.phone}><FiPhoneCall/> </a>
                                    </div>
                                    </h5>
                            </div>
                    </div>
                 </div>
                )}
                    {/* <div className="my-4 w-full mx-4  py-4 border-2  rounded-xl bg-gray-200 text-center">
                            <div className="text-center">
                            <img src="{shamim}" className="w-32 mx-auto rounded-full mb-8" alt="" />
                            </div>
                            
                            <div className="">
                                <h1>Name</h1>
                                <h4>Position</h4>
                            </div>
                    </div>
                    <div className="my-4 w-full mx-4 py-4 border-2  rounded-xl bg-gray-200 text-center">
                            <div className="text-center">
                            <img src="{shamim}" className="w-32 mx-auto rounded-full mb-8" alt="" />
                            </div>
                            
                            <div className="">
                                <h1>Name</h1>
                                <h4>Position</h4>
                            </div>
                    </div>
                    <div className="my-4 w-full mx-4 py-4 border-2  rounded-xl bg-gray-200 text-center">
                            <div className="text-center">
                            <img src="{shamim}" className="w-32 mx-auto rounded-full mb-8" alt="" />
                            </div>
                            
                            <div className="">
                                <h1>Name</h1>
                                <h4>Position</h4>
                            </div>
                    </div> */}
                </Carousel>
                
            </div>
            

        </div>
          
    
    );
};

export default Committee;