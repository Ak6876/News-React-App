import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
            <Routes>
            <Route  exact path="/general" element={<News keys="general" country="in" category="general"/>}></Route>
            <Route  exact path="/business" element={<News keys="business" country="in" category="business"/>}></Route> 
            <Route  exact path="/entertainment" element={<News keys="entertainment" country="in" category="entertainment"/>}></Route>
            <Route  exact path="/health" element={<News keys="health" country="in" category="health"/>}></Route> 
            <Route  exact path="/science" element={<News  keys="science" country="in" category="science"/>}></Route>
            <Route  exact path="/sports" element={<News keys="sports" country="in" category="sports"/>}></Route>
            <Route  exact path="/technology" element={<News keys="technology" country="in" category="technology"/>}></Route>                     
            </Routes>        
        </Router>
      </div>
    )
  }
}




