import React, { useEffect, useState } from 'react'
import axios from  'axios'

const baseUrl="http://localhost:5001/users"

function Home(props) {

    useEffect(()=>{
        const axiosusers=async()=>{
                await axios.get(baseUrl).then((response)=>{
                //console.log(response.data);
                props.setUserinfo(response.data);
                props.setApiuserinfo(response.data);  //2nd copy of setUserinfo/userinfo
            })
        }
        axiosusers();           
    },[])  

  return (
    <div className='container'>
        <h3 className='text-center'>Data fetched from user.json</h3>
            <table className="table table-primary table-striped">
            <thead>
                <tr>
                <th scope="col" className='text-center'>Employee</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            {
            props.userinfo.length===0?(<h4 className='text-center my-3 mx-2'>No users found</h4>):
                (
                    props.userinfo.map((item)=>{
                        return(
                        <tbody key={item.id}>
                            <tr>
                                <td style={{display:"flex",flexdirection:'row',justifyContent:'center'}}>
                                    <div className='mx-2'>
                                         <img  src={item.profile} width={65} height={65} style={{borderRadius:50}}/>
                                    </div>
                                    <div className='details mx-2'>
                                        <div>{item.name}</div>
                                        <div>{item.email}</div>
                                    </div>
                                </td>
                                <td>{item.role}</td>
                                <td><span className="badge rounded-pill text-bg-primary">{item.status}</span></td>
                            </tr>
                        </tbody>
                   
                )} ))}
            </table>
    </div>
  )
}
export default Home
