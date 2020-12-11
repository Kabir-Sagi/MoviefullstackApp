/* eslint-disable react/style-prop-object */
import "./MoviesInCardCarousel2.css";
import React from "react";
import TextComp from '../TextComp/index'

function template() {
  return (
    <div className="movies-in-card-carousel-2 container">
      <TextComp  category={this.props.headline}/>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
  <div className="row">
    <div className="col-md-6">
 
<div className="card card-image b3" >

 
  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
      <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
      <h3 class="card-title text-light pt-2"><strong>This is the card title</strong></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
        Odit sed qui, dolorum!.</p>
      
    </div>
  </div>
  
  

</div>
</div>
<div className="col-md-6">
<div className="card card-image b4" >

 
  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
      <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
      <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
        Odit sed qui, dolorum!.</p>
      
    </div>
  </div>
  </div>
</div>
</div>

    </div>
    <div class="carousel-item active">
  <div className="row">
    <div className="col-md-6">
 
<div className="card card-image b1" >

 
  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
 
      <h3 class="card-title pt-2 text-warning"><strong>The Hulk 3</strong></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
        Odit sed qui, dolorum!.</p>
      
    </div>
  </div>
  
  

</div>
</div>
<div className="col-md-6">
<div className="card card-image b2" >

 
  <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
     
      <h3 class="card-title text-warning pt-2"><strong>Three</strong></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
        Odit sed qui, dolorum!.</p>
      
    </div>
  </div>
  </div>
</div>
</div>

    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  );
};

export default template;
