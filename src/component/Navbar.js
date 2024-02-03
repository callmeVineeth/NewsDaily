import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Navbar extends Component {
  render() {
    return (
      <div>

    <nav className="nav fixed-top">
   
    <Link to="#" className="logo">News Daily</Link>
    <ul className="nav-links">
      <i className="uil uil-times navCloseBtn"></i>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">All</Link></li>
      <li><Link to="/war">War</Link></li>
      <li><Link to="/business">Business</Link></li>
      <li><Link to="/entertainment">Entertainment</Link></li>
      <li><Link to="/politics">Politics</Link></li>
      <li><Link to="/technology">Science</Link></li>
      <li><Link to="/health">Health</Link></li>
    </ul>
   
  </nav>
</div>)
  }
}

export default Navbar