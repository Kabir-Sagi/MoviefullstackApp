/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Home.css";
import React from "react";
import SearchComp from '../Search/index'
import MovieCarousel from '../MoviesInCarousel/index'
import Moviecard from '../MoviesInCardCarousel/index'

import MovieCardCarousel2 from '../MoviesInCardCarousel2/index'
import Footer from '../Footer/index'


function template() {
  return (
    <div className="home">
      <SearchComp />
      <MovieCarousel />
      <Moviecard 
      image1="https://cdn.wallpapersafari.com/67/24/Tarceb.jpg"
      image2="http://sfwallpaper.com/images/hollywood-movie-wallpapers-hd-16.jpg"
      image3="https://ourgooglegallery.files.wordpress.com/2015/01/8589130448038-hollywood-movies-wallpaper-hd.jpg"
      image4="https://i.pinimg.com/736x/89/65/1a/89651aeefbe8d47086a64e354b9cd03f.jpg"
      movie1="Prediator"
      movie2="Batman"
      movie3="Kate"
      movie4="The Hero"
      headline="Explore what’s streaming" 
        />
      <MovieCardCarousel2 headline="Coming Soon" />
      <Moviecard 
      headline="Explore what’s streaming" 
      movie1="Red Sonja"
      movie2="Expendables 2"
      movie3="Popeye"
      movie4="Ghost Protocol"
      image4="http://www.tomfornorthdakota.com/wp-content/uploads/2018/11/latest-hollywood-movies-posters-free-download-movie-posters-trailers-clips-banners-hd-movies-latest-hollywood-bollywood-movies.jpg"
      image1="http://2.bp.blogspot.com/-zsPbraCdh_0/URdlSsuSNzI/AAAAAAAAHZY/LtjcuP1x5l4/s1600/143252.jpg"
      image2="http://4.bp.blogspot.com/-oxYSuDoJ4ks/T_BT79bHc_I/AAAAAAAABqs/Tmdv-HR8KA8/s1600/hd+wallpaper+of+hollywood+movies-4.jpg"
      image3="http://wallpapers.filmibeat.com/ph-1024x768/2016/01/popeye_145248941500.jpg"
      headline="Trending Movies" 
        />
     
     <Footer />
    </div>
  );
};

export default template;
