
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Index from './Components/Index';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import { useState } from 'react';
import Search from './Components/Search';
import CrudAxios from './Components/CrudAxios';
import CreateCrud from './Components/CreateCrud';
import UpdateCrud from './Components/UpdateCrud';



function App() {

  const[search,setSearch]=useState("")
  const [userinfo,setUserinfo]= useState([]); //to fetch users from json
  const [apiuserinfo,setApiuserinfo]=useState();
    
  
  return (
      <BrowserRouter>
      <Navbar />
      <Search search={search} setSearch={setSearch} userinfo={userinfo} setUserinfo={setUserinfo} apiuserinfo={apiuserinfo} setApiuserinfo={setApiuserinfo}/>
        <Routes>
          <Route path='/' element={<Home  search={search} setSearch={setSearch} userinfo={userinfo} setUserinfo={setUserinfo} apiuserinfo={apiuserinfo} setApiuserinfo={setApiuserinfo} />}/>
          <Route path='/posts' element={<Index search={search} setSearch={setSearch}/>}/>
          <Route path='/users' element={<Photos search={search} setSearch={setSearch}/>}/>
          <Route path='/crud' element={<CrudAxios  search={search} setSearch={setSearch} userinfo={userinfo} setUserinfo={setUserinfo} apiuserinfo={apiuserinfo} setApiuserinfo={setApiuserinfo} />}/>
            <Route exact path='/crud/create' element={<CreateCrud/>}/>
            <Route exact path='/crud/update/:id' element={<UpdateCrud/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;



