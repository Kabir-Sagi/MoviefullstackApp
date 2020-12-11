import "./DramaMovies.css";
import React from "react";

function template() {
  return (
    <div className="drama-movies">
      {
        this.state.moviedata.map((data)=>{
          return  <>
                <div class="container">

         <div class="card bg-dark text-white m-0 p-0 mt-2" >

          

         

             <div class="row ">
                 <div class="col-md-4  ">
                     <img src={data.Image}  alt="ss" height="100%" width="100%"  />
                 </div>&nbsp;&nbsp;

                 <div class="col-md-6  ">
        <p className=" h4 card-title mt-4">{data.Title}
        <p className="h5 my-2"> {data.Generic} MOVIE</p>
        <p className="h5">  {data.Rating} </p>
      
        {/* <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  text-primary fa fa-star checked"></i>
        <i className="  fa fa-star "></i> */}
        </p>
     
   
   <p className="text-white">{data.Description}</p>
   <button className="btn btn-primary btn-lg my-2 px-4">Play</button>&nbsp;&nbsp;&nbsp;
   <button className="btn btn-primary btn-lg my-2 px-4">Watch Trailer</button>&nbsp;&nbsp;&nbsp;
   <button className="btn btn-primary btn-lg my-2 px-4">Download</button>
 
  
        
                    </div>
                   
                  
                      

           
                     
                   
             </div>
         </div>
         
     </div>

          </>
        })
      }
    </div>
  );
};

export default template;
