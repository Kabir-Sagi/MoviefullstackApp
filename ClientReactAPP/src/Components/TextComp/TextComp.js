/* eslint-disable no-useless-constructor */
import React    from "react";
import template from "./TextComp.jsx";

class TextComp extends React.Component {
  constructor(props) {
    super(props)
  
    
  }
  
  render() {
    return template.call(this);
  }
}

export default TextComp;
