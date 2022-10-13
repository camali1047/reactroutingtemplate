import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from './About';
import Home from './Home';
// import Contact from './Contact';

function App() {
 let [deneme,setDeneme] =useState("");
 useEffect(()=>{
 console.log("ali cam useeffect");
 
 },[deneme])


console.log("ali cam app");
  return ( <div>
   
  <Router>
  <Link to="/about" >About</Link>
  <Link to="/" >Home</Link>
  <Routes>
  <Route path="/" element={<Home value={deneme} change={(e)=>{setDeneme(e.target.value)}} />} component={Home} />
  <Route exact path='/about' element={<About />} component={About} />
  </Routes> 
  </Router>

  </div>);
}

export default App;
