
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import News from './component/News';
import   './component/Nav.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export class App extends Component {


  render() {
    return (
      <Router>
      <div>
       
    <Navbar/>
    <Routes>
        <Route exact path='/'  element={<News key=' home' pageSize={12} category='home' language='en' />} />
        <Route exact path='/about' element= {<News key='about ' pageSize={12} category='about' language='en'/>} />
        <Route exact path='/general'element= {<News key='general' pageSize={12} category='general' language='en'/>} />
        <Route exact path='/war'  element={<News key='war' pageSize={12} category='war' language='en'/>} />
        <Route exact path='/business'  element={<News key='business' pageSize={12} category='business' language='en'/>} />
        <Route exact path='/entertainment'  element ={<News key='entertainment' pageSize={12} category='entertainment' language='en'/>} />
        <Route exact path='/politics' element= {<News key='politics' pageSize={12} category='politics' language= 'en'/>}/>
        <Route exact path='/technology' element={<News key='technology' pageSize={12} category='technology' language=' en'/>} />
        <Route exact path='/health'   element={<News key='health' pageSize={12} category='health' language='en'/>}/>
        
        </Routes>
      </div>
      </Router>
    )
  }
}

export default App

