import "./MoviesInCarousel.css";
import React from "react";


function template() {
  return (
    <div className="movies-in-carousel  ">
     <div id="carouselExampleIndicators" className="carousel slide" data-interval="1000"  data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Hollywood-Action-Movies-HD-Wallpapers-3.jpg" alt="First slide"  width="1300px" height="400px" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://bdmusic365.mobi/wp-content/uploads/2018/12/Next-Enti-2018-Telugu-Movie-720p-DVDScr-700MB-x264-1.jpg" alt="Second slide" width="1300px" height="400px" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/06/sanju-upcoming-bollywood-movie-1528459687.jpg" alt="Third slide"  width="1300px" height="400px" />
    </div>
  </div>
  
</div>
    </div>
  );
};

export default template;
