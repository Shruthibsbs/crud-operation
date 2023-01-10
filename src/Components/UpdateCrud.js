import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'

function UpdateCrud(props) {

  const [name,setName]=useState(' ')
  const [email,setEmail]=useState(' ')
  const [role,setRole]=useState(' ')
  const [status,setStatus]=useState(' ')
  const [profile,setProfile]=useState(' ')
  const {id}= useParams();
  //alert(id)

  const createHandler =async ()=>{
    await axios.put(`http://localhost:5001/users/${id}`,{
        name,email,role,status,profile
     })
  }

  const Loaduser =async()=>{
    const result=await axios.get("http://localhost:5001/users/"+id);
    console.log(result)
    setName(result.data.name)
    setEmail(result.data.email)
    setRole(result.data.role)
    setStatus(result.data.status)
    setProfile(result.data.profile)

  }
  useEffect(()=>{
    Loaduser();
  },[])

  return (
    <div className='container'>
    <form>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">UserName</label>
        <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)}  placeholder="UserName"/>
        </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" value={email} className="form-control"  onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
  
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Role</label>
        <input type="text" value={role} className="form-control"  onChange={(e)=>setRole(e.target.value)} id="exampleInputPassword1" placeholder="Role"/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Status</label>
        <div className="form-check">
            <input className="form-check-input" type="radio" onChange={(e)=>setStatus(e.target.value)} name="exampleRadios" id="exampleRadios1" value="Active"/>
            <label className="form-check-label" htmlFor="exampleRadios1">Active</label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" onChange={(e)=>setStatus(e.target.value)} name="exampleRadios" id="exampleRadios2" value="Inactive"/>
            <label className="form-check-label" htmlFor="exampleRadios2">Inactive</label>
        </div>
      </div> 
        {/* <div className="form-group">
            <label htmlFor="exampleFormControlFile1 mx-4">Profile Pic</label>
            <input type="file" className="form-control-file" onChange={(e)=>setProfile(e.target.value)} id="exampleFormControlFile1"/>
        </div> */}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Profile Pic</label>
          <input type="text" className="form-control" value={profile} onChange={(e)=> setProfile(e.target.value)}  placeholder="Enter Url of pic"/>
      </div>
    
        <Link to={"/crud"}>
          <button type="submit" className="btn btn-primary my-2" onClick={createHandler}>Update</button>
        </Link>
    
    </form>

    </div>
    
  )
}

export default UpdateCrud

