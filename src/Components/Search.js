import React, { useState } from 'react'


function Search(props) {

  const filterHandler=(e)=>{
    props.setSearch(e.target.value)
      if(e.target.value==''){
        props.setUserinfo(props.apiuserinfo)
      }else{
        const filterVal=props.apiuserinfo.filter((info)=>info.name.toLowerCase().includes(e.target.value.toLowerCase())||info.email.toLowerCase().includes(e.target.value.toLowerCase()))
        props.setUserinfo(filterVal)
      }
  }
 
    

  return (
    <form className="d-flex my-4" role="search" >
         <label className="float-right mx-2" style={{fontSize:20}}>Search</label>
        <input
             style={{width:450}}
             className="form-control me-2 float-right" 
             type="search" placeholder="Search" 
             onChange={filterHandler}
             
             aria-label="Search"/>
       
     
      </form>
  )
}

export default Search
