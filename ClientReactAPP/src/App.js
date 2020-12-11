import React, {useEffect,useState} from 'react'
import './App.css';
import Home from './Components/Home/index'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Axios from 'axios'
import store from './ReduxStore/store'
import Search from './Components/Search/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index'
import ActionMovies from './Components/ActionMovies/index'
import ComedyMovies from './Components/ComedyMovies/index'
import DramaMovies from './Components/DramaMovies/index'
import RomanticMovies from './Components/RomanticMovies/index'
import ThrillerMovies from './Components/ThrillerMovies/index'
import SearchComp from './Components/Search/index'
import SearchData from './Components/SearchData/index'





function App() {
  
  useEffect(function(){
    alert("app.js")
    Axios.get("http://localhost:2020/getMovieData/getData")
    .then((res)=>{
     
       console.log(res)
       store.dispatch({
         type:'MOVIESDATA',
         payload:res.data
       })
      
     
    },(err)=>{
  alert(err)
    })
  },[])
  return (
    <div className="App  mt-0">
      
     
        <Navbar />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Thriller" component={ThrillerMovies} />
          <Route exact path="/Comedy" component={ComedyMovies} />
          <Route exact path="/Action" component={ActionMovies} />
          <Route exact path="/Drama" component={DramaMovies} />
          <Route exact path="/Romance" component={RomanticMovies} />
          <Route exact path="/searchmovie" component={SearchData} />
         
       
        </Switch>
    
     
    
    </div>
  );
}

export default App;
