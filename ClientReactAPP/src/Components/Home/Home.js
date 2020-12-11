import React    from "react";
import template from "./Home.jsx";


class Home extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       moviedata:[]
    }
  }
  
  render() {
    return template.call(this);
  }
}

export default Home;
