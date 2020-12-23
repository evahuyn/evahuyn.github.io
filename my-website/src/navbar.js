import React, {useState, Component} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom';
import './Navbar.css'

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
    if(scroll < 70){
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
        <Link to="/project" className="navItem">Projects</Link>
        <Link to="/photography" className="navItem">Photography</Link>
        <Link to="/about" className="navItem" 
        onClick={()=>this.changeStyle("1px solid black","black")}>About</Link>
      </nav>
    )
  }
}
export default Navbar