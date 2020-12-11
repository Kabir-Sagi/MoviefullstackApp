import React    from "react";
import template from "./ActionMovies.jsx";
import {connect} from 'react-redux'

class ActionMovies extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       moviedata:this.props.storemoviedata
    }
  }
  
   
  componentDidMount(){
    
   var genericc= this.props.location.pathname.substr(1).toUpperCase()
   var filterdata = this.state.moviedata.filter(function(data){
      return data.Generic === genericc
  })
   this.setState({
      moviedata:filterdata
    })
   
  }
  render() {
    return template.call(this);
  }
}

export default connect(function(store){
  return {
     storemoviedata:store.myReducer.moviedata
  }
},null)(ActionMovies)
