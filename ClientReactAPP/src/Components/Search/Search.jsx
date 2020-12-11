import "./Search.css";
import React from "react";
import { Redirect } from "react-router-dom";

function template() {
 
  if(this.state.flag){
    return <Redirect to="/searchmovie" />
  }
  else {
  return (
    <div className="search mt-3  container my-4">
  
  <input size="50" className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search" onChange={(e)=>{this.setState({
      inputData:e.target.value
    })}} />
   <button class="btn btn-primary btn-rounded btn-sm my-0" onClick={this.sendData}>Search</button>


    </div>
  );
  }
};

export default template;
