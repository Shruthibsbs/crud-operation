import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Photos(props) {
    const [data, setData]=useState([]);

    useEffect(()=>{
        const axiosphotos=async()=>{
            await axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
                //console.log(response.data);
                setData(response.data)
            })
        }
        axiosphotos();
    },[])
  return (
    <>
        <h3 className='text-center'> Data fetched from https://jsonplaceholder.typicode.com/users</h3>
        <div className='container'>
                <table className="table table-secondary table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Company Name</th>
                          </tr>
                        </thead>
                        {data.filter((info)=>info.name.toLowerCase().includes(props.search.toLowerCase())).map((item)=>{
                                return(
                                    <tbody key={item.id}>
                                    <tr >
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
                                    <td>{item.company.name}</td>
                                  </tr>
                                  </tbody>
                                )
                            })
                         }
                       
                         
                     
                    </table>       
        </div>
    </>
    
  )
}

export default Photos
