import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { createUserEP, googleSignIn, initailizeLogin, signInWithEP, signOuts } from './AuthenticationManger';
// import {  } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './Authentication.css'
import { userContext } from '../../App';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,sendEmailVerification,updateProfile } from "firebase/auth";
import Notification from '../Notifications/Notification';
const Authentication = () => {
    
    //authentication
    initailizeLogin();
    const [newUser,setNewUser]=useState(false); // it is for check sign in or signup form nothing else
    const [loggedIn,setLoggedIn]=useContext(userContext);
    const [notiSucces,setNotiSucces]=useState('');
    const [notiFailed,setNotiFailed]=useState('');
    const history=useNavigate();
    const location=useLocation();
    let { from } =  { from: { pathname: "/  " } };

    const [user,setUser]=useState({
      isSignedIn: false,
      name:'',
      email:'',
      password:'',
      success:false,
      error:' ',
      photo:''
    });
    console.log(user);
    const handleChange=(event)=>{
        console.log(event.target.value)
            let isFieldValid=true;
    if(event.target.name==='email'){
      
      isFieldValid= /\S+@\S+\.\S+/.test(event.target.value);//.test is return is value is true or false
      
    }
    if(event.target.name==='password'){
        const isPasswordValid= event.target.value.length>=6;
        const isPassNum=/\d{1}/.test(event.target.value);
        isFieldValid=isPasswordValid&&isPassNum;
    }
    if(isFieldValid){
        const newUserInfo={...user};
        newUserInfo[event.target.name]=event.target.value;
        setUser(newUserInfo);
    }
    }
    const updateProfile=name=>{
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName:name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
    
    const handleSubmit=(e)=>{
        // console.log(user.email)
       if(newUser&&user.email&&user.password){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        // Signed in 
        //const users = userCredential.user;
        const newUserInfo={...user};
        newUserInfo.success=true;
        newUserInfo.error='';
        setUser(newUserInfo);
        updateProfile(user.name)
        // setLoggedIn(newUserInfo)
        //console.log(users)
        sendEmailVerification(auth.currentUser)
        .then(() => {
         // Email verification sent!
        // ...
        console.log(auth.currentUser);
         });
        // ...
      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.success=false;
        newUserInfo.error=error.message;
        setUser(newUserInfo);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });   
       }
       else if((!newUser)){
        const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        //  const user = userCredential.user;
         console.log(user)
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.isSignedIn=true;
        setUser(newUserInfo);
        setNotiSucces(true);
        setLoggedIn(newUserInfo);
        history(from, { replace: true });
        console.log(auth.currentUser);  
        
    
      })
      .catch((error) => {
        const newUserInfo={};
        newUserInfo.error=error.message;
        newUserInfo.isSignedIn=false;
        setUser(newUserInfo);
        setNotiFailed(true);
        setLoggedIn(newUserInfo);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
       }
        e.preventDefault(); 
    }

    //console.log(newUser)
    
    return (
        <div  style={{backgroundColor:'lightGray'}}  className="">
            {
              // user.isSignedIn&& <p>login succeed</p>
              <Notification success={notiSucces} setNotiSucces={setNotiSucces} failed={notiFailed} setNotiFailed={setNotiFailed}></Notification>
            }
            <div className=" flex justify-center items-center md:h-screen  ">
            <form onSubmit={handleSubmit}  action="" className="form">
            
                <h1 className="font-normal mb-6">{newUser?"Sign up":"Sign in"}</h1>

                {newUser&&<div className="form__div relative h-12 mb-6">
                    <input type="text" onBlur={handleChange} name="name" className="form__input" placeholder=" " required />
                    <label for="" className="form__label">Name</label>
                </div>}

                <div className=" relative h-12 mb-6">
                    <input type="text"  onBlur={handleChange} name="email" className="form__input" placeholder=" " required/>
                    <label for="" className="form__label">Email</label>
                </div>
                <div className="form__div">
                    <input type="password" name="password"  onBlur={handleChange} className="form__input" placeholder=" " required/>
                    <label for="" className="form__label">Password</label>
                </div>
               {
                   newUser&& <div className="form__div">
                   <input type="password" onBlur={handleChange} name="confirm-password" className="form__input" placeholder=" "/>
                   <label for="" className="form__label">Confirm Password</label>
               </div>
               }
                <input type="submit" className="form__button" value={newUser?"Sign up":"Sign in"}/>
                <p className=" pt-4 text-center">{newUser?"Already have a Account?":"New Member?"} <span  onClick={()=>setNewUser(!newUser)} className="text-red-500 cursor-pointer ">{newUser?"Sign in":"Sign up"}</span></p>
            </form>
            
               
            
         </div>
         
        </div>
    );
};

export default Authentication;