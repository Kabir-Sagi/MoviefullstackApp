/* eslint-disable no-useless-constructor */
import React    from "react";
import template from "./MoviesInCardCarousel.jsx";

class MoviesInCardCarousel extends React.Component {
  constructor(props) {
    super(props)
  
    
  }
  
  render() {
    return template.call(this);
  }
}

export default MoviesInCardCarousel;
