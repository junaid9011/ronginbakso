import React, { useEffect } from 'react';
import './Notification.css';
import { AiFillCheckCircle,AiFillCloseCircle,AiFillExclamationCircle } from "react-icons/ai";
const Notification = ({success,setNotiSucces,failed,setNotiFailed}) => {
    // const [close,setClose]=useState(false);
    // const handleClose=()=>{
    //     setClose(true);
    //     // console.log(show);
    // }
    useEffect(()=>{
        setTimeout(() => {
           if(success){
               setNotiSucces(false);
               console.log("entered")
           }
           
           
        }, 4000);
    },[success,setNotiSucces])
    useEffect(()=>{
        setTimeout(() => {
           if(failed){
               setNotiFailed(false);
           }
           
        }, 4000);
    },[failed,setNotiFailed])
    return (
        <div>
            

            {/* <div className=""> */}
            {success&&(<div className=" notification-success show">
                    <div className="containers ">
               
                     <span className=""> <span> <AiFillCheckCircle className="w-4 h-4 mr-2 text-green-700 inline"/></span>
                     <span>login</span>
                     <span className="ml-2">Successful</span>
                     <span> <AiFillCloseCircle className="w-4 ml-2 inline"/></span>
                     </span>
                    </div>
                 </div>)
                 }
                 {
                     failed&&(<div className=" notification-failed ">
                     <div className="containers ">
                
                      <span className=""> <span> <AiFillExclamationCircle className="w-4 h-4 mr-2 text-red-500 inline"/></span>
                      <span>login</span>
                      <span className="ml-2">failed</span>
                      <span> <AiFillCloseCircle className="w-4 ml-2 inline"/></span>
                      </span>
                     </div>
                  </div>)
                 }
            {/* </div> */}
           
            {/* <button className=" absolute top-1/2 border-1" onClick={handleShow}>show</button> */}
            {/* <button className=" absolute top-1/2 left-10 border-1" onClick={handleClose}>close</button> */}
        </div>
    );
};

export default Notification;