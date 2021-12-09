import * as firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import firebaseConfig from '../../firebase.config';

export const initailizeLogin=()=>{
    //if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
   // }
}
export const createUserEP=(name,email,password)=>{
    const auth = getAuth();
   return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const newUser={...user};
      newUser.error='';
      newUser.success=true;
      return newUser;
      

    })
    .catch((error) => {
      const newUser={};
      newUser.error=error.message;
      newUser.success=false;
      return newUser;
    });
  }
  export const signInWithEP = (email,password)=>{
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser={...user};
        newUser.error='';
        newUser.success=true;
        return newUser;
        
    
      })
      .catch((error) => {
        const newUser={};
        newUser.error=error.message;
        newUser.success=false;
        return newUser;
        
      });
  }
