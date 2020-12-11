/* eslint-disable jsx-a11y/alt-text */
import "./Navbar.css";
import React from "react";



import {Link} from 'react-router-dom'

function template() {
  
 
  

  return (
    <div className="second">
    
     <nav className="navbar navbar-dark  bg-dark  navbar-expand-sm">
       
        <h3><span class="badge mx-2 p-2 badge-warning"><b>Movie App</b></span></h3>
           
           <div className="  collapse navbar-collapse" id="nav1">
             <ul className="navbar-nav text-white font-weight-bold ">
            
               <li className="nav-item mx-2"><Link to="/" className="nav-link text-white">Home</Link> </li>
               <li className="nav-item mx-2 "><Link to={{
    pathname: "/Comedy",
   
   
  }} className="nav-link text-white">Comedy</Link> </li>
               <li className="nav-item mx-2 "><Link to={{
    pathname: "/Thriller",
   
   
  }} className="nav-link text-white">Thriller</Link> </li>
               <li className="nav-item mx-2 "><Link to={{
    pathname: "/Drama",
   
   
  }} className="nav-link text-white">Drama</Link> </li>
               <li className="nav-item mx-2"><Link to={{
    pathname: "/Action",
   
   
  }} className="nav-link text-white">Action</Link> </li>
            
            <li className="nav-item mx-1"><Link to={{
    pathname: "/Romance",
   
   
  }} className="nav-link text-white">Romance</Link> </li>
               
             </ul>
            
      {/* <input size="90" className="form-control me-2" type="search"
       placeholder="Search Movies like " 
       onChange={(e)=>{this.setState({
        searchmoviedata:e.target.value
       })}} />&nbsp;&nbsp;&nbsp;
   <button className="btn btn-outline-success text-white"type="button"  onClick={this.filtersearchmovie}>Search</button> */}
  
             
           </div>
        
     </nav>
    
    </div>
  );
};

export default template;
