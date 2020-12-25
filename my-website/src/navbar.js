import React, {useState, Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom';
import './navbar.css'

let navStyle = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  position: "fixed",
  width: "100%",
  transition: "500ms ease",
}
let preStyle = {
  height: "12vh",
  backgroundColor: "transparent",
  borderBottom: "1px solid white",
}

let postStyle = {
  backgroundColor: "rgb(255,255,255,0.8)",
  height: "10vh",
}

function scrollEffect(){
  $(window).on('scroll', function(){
  let scroll = $(window).scrollTop();
    if(scroll < 40){
      $('.navbar').css(preStyle)
    } else{
      $('.navbar').css(postStyle)
    }
  });
}

let navItemClass;

class Navbar extends Component{

  constructor(props) {
    super(props);
    this.state = { preBorder: "1px solid white", postColor: "rgb(255,255,255,0.8)"};
  }

  changeStyle = (preBorder, postColor) => {
    this.setState({ preBorder, postColor });
  };

  render(){
    preStyle.borderBottom= this.state.preBorder;
    postStyle.backgroundColor = this.state.postColor;
    navItemClass = this.state.navItemClass;
    scrollEffect()
    return (
      <nav className="navbar" style={Object.assign({}, preStyle, navStyle)}>
        <Link to="/" className="navItem" 
        onClick={()=>this.changeStyle("1px solid white","rgb(255,255,255,0.8)")}>Home</Link>
        <Link to="/project" className="navItem" 
        onClick={()=>this.changeStyle("1px solid rgb(227,219,216,0.8)","rgb(227,219,216,0.8)")}>Project</Link>
        <Link to="/experience" className="navItem"
        onClick={()=>this.changeStyle("1px solid rgb(227,219,216,0.8)","rgb(227,219,216,0.8)")}>Experience</Link>
        <Link to="/about" className="navItem" 
        onClick={()=>this.changeStyle("1px solid rgb(227,219,216,0.8)","rgb(227,219,216,0.8)")}>About</Link>
      </nav>
    )
  }
}
export default Navbar