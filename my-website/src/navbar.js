import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom';

const Navbar = () =>{

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

  $(window).on('scroll', function(){
  let scroll = $(window).scrollTop();
  console.log(scroll)
    if(scroll < 70){
      $('.navbar').css(preStyle)
    } else{
      $('.navbar').css(postStyle)
    }
  });

  const itemStyle = {
    marginInline: "4vw",
    fontSize: "1.2rem",
  }

  return (
    <nav className="navbar" style={Object.assign(preStyle, navStyle)}>
      <Link to="/" style={itemStyle}>Home</Link>
      <Link to="/" style={itemStyle}>Projects</Link>
      <Link to="/" style={itemStyle}>Photography</Link>
      <Link to="/about" style={itemStyle}>About</Link>
    </nav>
  )
}
export default Navbar