import React, { useEffect, useState } from 'react'
import axios from'axios'

function Index(props) {
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        const axiosposts=async()=>{
            await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
                //console.log(response.data);
                setPosts(response.data)
            })
        }
        axiosposts();
    },[])

  return (
    <>
    <h3 className='text-center'> Data fetched from https://jsonplaceholder.typicode.com/posts</h3>
        <div className='container'>
            {
                posts.filter((info)=>info.title.toLowerCase().includes(props.search.toLowerCase())).map((item)=>{
                    return(
                        <div className="card text-center my-2" key={item.id}>
                            <div className="card-header"> <strong>{item.id}.{item.title}</strong></div>
                            <div className="card-body"><p className="card-text">{item.body}</p> </div>
                        </div> 
                    )
                })
            }
           
        </div>
    </>
  )
}

export default Index

