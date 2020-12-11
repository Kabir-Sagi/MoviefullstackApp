/* eslint-disable react/no-direct-mutation-state */
import React    from "react";
import template from "./Search.jsx";
import {connect} from 'react-redux'
import Store from '../../ReduxStore/store'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
 
    this.state = {
     
       inputData:"",
       filterStoreData:[],
       flag:false
      
    }
  }
  sendData = (props)=>{
    var a = this.state.inputData
    
   var storedata = Store.getState() 
   var storedata1 = storedata.myReducer.moviedata
   this.state.filterStoreData = storedata1.filter(function(data){
      return data.Title === a
   })
    
     Store.dispatch({
       type:'SEARCHDATA',
       payload:this.state.inputData
     })
    
     this.setState({
       ...this.state,
      flag:true
     })
    
  }
  async f1() {
   await Store.dispatch({
    type:'FILTEREDDATA',
    payload:this.state.filterStoreData
  })
   
   }
  componentWillUnmount() {
   this.f1()
  }
  render() {
    return template.call(this);
  }
}

export default Search;
