import "./SearchData.css";
import React from "react";

function template() {
  return (
    <div className="search-data text-white">
     
     {
       this.state.filterdata.map(function(data){
       return <div>
             <div className="container bg-dark">
               <div className="row">
                 <div className="card">
                   <div className="card-header">
                     <img src={data.Image} className="img-fluid"/>
                   </div>
                   <div className="card-body">
       <p>{data.Title}</p>
       <p>{data.Description}</p>
                   </div>
                 </div>
               </div>
             </div>
        </div>

       }) 
     }
    </div>
  );
};

export default template;
