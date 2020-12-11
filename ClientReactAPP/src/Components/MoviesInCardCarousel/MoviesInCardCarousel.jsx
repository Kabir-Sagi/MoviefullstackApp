/* eslint-disable jsx-a11y/img-redundant-alt */
import "./MoviesInCardCarousel.css";
import React from "react";
import TextComp from '../TextComp/index'


function template() {
  return (

    <div className="movies-in-card-carousel container mt-3">
      <TextComp category={this.props.headline} />
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
     <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
  
<div class="card-deck">

  
  <div class="card mb-4">

   
    <div class="view overlay">
    <img class=" img-fluid" src={this.props.image1}
        alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

   
    <div class="card-body">

   
  <h4 class="card-title">{this.props.movie1}</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>

  </div>
  
 

  
  <div class="card mb-4">

    <div class="view overlay">
      <img class="card-img-top" src={this.props.image2}
        alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

    <div class="card-body">

   
  <h4 class="card-title">{this.props.movie2}</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>

  </div>
  


  <div class="card mb-4">

   
    <div class="view overlay">
      <img class="card-img-top" src={this.props.image3}
        alt="Card image cap" />
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  
    <div class="card-body">

     
  <h4 class="card-title">{this.props.movie3}</h4>
     
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
    
      <button type="button" class="btn btn-primary btn-md">Read more</button>

    </div>

  </div>
  

</div>

    </div>
    
   
  </div>
 
</div>
    </div>
  );
};

export default template;
