import React, { useEffect, useState } from 'react';
import users from '../../fakeData/fakeData.json'
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import ppl from './People.css'

const People = () => {
    const [member,setMember]=useState([]);

    useEffect(()=>{
        setMember(users);
    },[])
    const [userss,setUser]=useState([]);
    const addMember=(janina)=>{
        const newMember=[...userss,janina];
        setUser(newMember);
        
    }
    
    return (
        <div className="people">
           <div className="user-container">
           {
                member.map(mm=><Member 
                    addMember={addMember}
                    member={mm}>{}

                    </Member>)
                    
            }
           </div>
           <div className="cart">
              <Cart cart={userss} addMember={addMember} ></Cart>
             
                   
           </div>
        </div>
       
    );
};

export default People;