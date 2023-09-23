import React from 'react';
import {Table} from 'react-bootstrap'
const users= [
    {id: 1, title: "Shamim Miah",position:"President",fb:"https://www.facebook.com/Shamimrfll.miah.31586",phone:"0177404141"},
    {id: 2, title: "Abdullah Al Mahmud",position:"Accountant",fb:"https://www.facebook.com/mahmudali.niloy",phone:"01791541550"},
    {id: 3, title: "Remon khan Kuyasha",position:"Co-Accountant"  ,fb:"",phone:"01521763702"},
    {id: 4, title: "Junaid Ahmed",position:"IT Admin"  ,fb:"https://www.facebook.com/2a6m9x",phone:"01762143370"},
    {id: 5, title: "Mahadi Hasan",position:"Fund Collector",fb:"https://www.facebook.com/mahadih392",phone:"01763922557"},
    
    {id: 6, title: "Rashadul Islam Hemu",position:"Tree Planter"  ,fb:"https://www.facebook.com/here.king.18",phone:"01798585244"},
    // {id: 7, title: "Abdullah Al Mahmud",position:"Tree Planter"  ,fb:"https://www.facebook.com/Md.abdulla743",phone:""}
    
    // {id: 7, link:"" title: "",position:"",image:""},
    // {id: 1, title: "",position:"",image:""},
    // {id: 1, title: "",position:"",image:""},
    // {id: 1, title: "",position:"",image:""},
    // {id: 1, title: "",position:"",image:""},
    // {id: 1, title: "",position:"",image:""},

    
  ]

const Volenteers = () => {
    return (
        <div>
            <h1 className='my-4 py-4'>Voluenteers</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Phone</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>
                            <tr>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.phone}</td>
                    
                    </tr>)
                    }
                
                </tbody>
            </Table>
        </div>
    );
};

export default Volenteers;