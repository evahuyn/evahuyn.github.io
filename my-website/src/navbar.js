import React, {useState} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom';
import './Navbar.css'

const navStyle = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  position: "fixed",
  width: "100%",
  transition: "500ms ease",
}
const preStyle = {
  height: "12vh",
  backgroundColor: "transparent",
  borderBottom: "1px solid white",
}

const postStyle = {
  backgroundColor: "rgb(255,255,255,0.8)",
  height: "10vh",
}

const Navbar = () =>{
  $(window).on('scroll', function(){
  let scroll = $(window).scrollTop();
  console.log(scroll)
    if(scroll < 70){
      $('.navbar').css(preStyle)
    } else{
      $('.navbar').css(postStyle)
    }
  });

  return (
    <nav className="navbar" style={Object.assign({}, preStyle, navStyle)}>
      <Link to="/" className="navItem">Home</Link>
      <Link to="/" className="navItem">Projects</Link>
      <Link to="/" className="navItem">Photography</Link>
      <Link to="/about" className="navItem">About</Link>
    </nav>
  )
}
export default Navbar