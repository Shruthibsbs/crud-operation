import React, { useEffect, useState } from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom';

const baseUrl="http://localhost:5001/users"

function CrudAxios(props) {

    const[userinfo,setUserinfo]= useState([]); //to fetch users from json
    const[apiArray,setApiArray]=useState([]);

//GET -To fetch data from api
    const axiosusers=async()=>{
        await axios.get(baseUrl).then((response)=>{
        //console.log(response.data);
        props.setUserinfo(response.data);
        //props.setApiuserinfo(response.data);  //2nd copy of setUserinfo/userinfo
    })
    }  
//DELETE -to delete data from api
    const deleteHandler=async(id)=>{
        console.log(id)
        await axios.delete(`http://localhost:5001/users/${id}`).then(()=>{
            axiosusers();
        }) 
    }

    useEffect(()=>{  
        axiosusers();           
    },[])
    
  return (
    <div className='container my-2'>
        <div className=' d-flex justify-content-between bg-light'>
            <h3 className='text-center mx-2'>Data fetched from user.json</h3>
            <td>
                <Link to={"/crud/create"}>
                <button type="button" className="btn btn-secondary btn-sm float-end my-1 mx-2">Add users</button>
                </Link>
            </td>
        </div>       
            <table className="table table-light table-striped my-3">
            <thead>
                <tr>
                <th scope="col" className='text-center'>Employee</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                </tr>
            </thead>
            {
            props.userinfo.length===0?(<tbody><tr><td className='text-center my-3 mx-2'>No users found</td></tr></tbody>):
                
                    props.userinfo.map((item)=>{
                        return(
                        <tbody key={item.id}>
                            <tr>
                                <td style={{display:"flex",flexdirection:'row',justifyContent:'center'}}>
                                    <div className='mx-1'>
                                         <img  src={item.profile} width={65} height={65} style={{borderRadius:50}}/>
                                    </div>
                                    <div className='details mx-2'>
                                        <div>{item.name}</div>
                                        <div>{item.email}</div>
                                    </div>
                                </td>
                                <td>{item.role}</td>
                                <td><span className="badge rounded-pill text-bg-primary">{item.status}</span></td>
                                <td>
                                    <Link to={"/crud/update/"+item.id}><button type="button"  className="btn btn-outline-success btn-sm mx-1">Update</button></Link>
                                    <Link to={"/crud"}><button type="submit" onClick={()=>deleteHandler(item.id)} className="btn btn-outline-danger btn-sm mx-1">Delete</button></Link>
                                </td>
                                
                            </tr>
                        </tbody>
                   
                )} )}
            </table>
    </div>
  )
}
export default CrudAxios
