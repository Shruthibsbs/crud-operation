import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import {useNavigate} from 'react-router-dom'

function CreateCrud() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [role,setRole]=useState('')
  const [status,setStatus]=useState('')
  const [profile,setProfile]=useState('')

  const createHandler=async ()=>{
    await axios.post("http://localhost:5001/users",{
        name,email,role,status,profile
     })
  }

  return (
    <div className='container'>
    <form>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">UserName</label>
        <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="UserName"/>
  </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" value={email} onChange={(e)=>  setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
  
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Role</label>
        <input type="text" value={role} className="form-control" onChange={(e)=> setRole(e.target.value)} id="exampleInputPassword1" placeholder="Role"/>
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
        {/* <div className="form-group">
            <label htmlFor="exampleFormControlFile1 mx-4">Profile Pic</label>
            <input type="file" className="form-control-file" onChange={(e)=>setProfile(e.target.value)} id="exampleFormControlFile1"/>
        </div> */}
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Profile Pic</label>
        <input type="text" value={profile} className="form-control" onChange={(e)=> setProfile(e.target.value)}  placeholder="Enter Url of pic"/>
  </div>
    </div> 
        <Link to={"/crud"}>
          <button type="submit" className="btn btn-primary my-2" onClick={createHandler}>Submit</button>
        </Link>
    
    </form>

    </div>
    
  )
}

export default CreateCrud
