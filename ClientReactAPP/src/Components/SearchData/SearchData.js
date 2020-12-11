import React    from "react";
import template from "./SearchData.jsx";
import {connect} from 'react-redux'


class SearchData extends React.Component {

 
  constructor(props) {
    super(props)
  
    this.state = {
       moviedata:this.props.data,
       searchData:this.props.searchData,
       filterdata:this.props.filterData
    }
  }
  
  render() {
  
    return template.call(this);
  }
}

export default connect(function(store){
  return {
    data:store.myReducer.moviedata,
    searchData:store.myReducer.searchData,
    filterData:store.myReducer.filterData
  }
})(SearchData)
