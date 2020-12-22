import React, {useState} from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom';
import "./navbar.css"

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

// const useHover = () => {
//   const [ hover, setHover ] = useState(false);

//   const onMouseEnter = () => {
//     setHover(true);
//   };

//   const onMouseLeave = () => {
//     setHover(false);
//   };

//   let hoverStyle = !hover ? {
//       color: "black", transition: 'all .2s ease-in-out',
//     } : {
//       color: "white", transition: 'all .2s ease-in-out',
//     };

//     return { hoverStyle, onMouseEnter, onMouseLeave };
// };

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

  // const { hoverStyle, ...hoverProps } = useHover();

  return (
    <nav className="navbar" style={Object.assign(preStyle, navStyle)}>
      <Link to="/" className="item">Home</Link>
      <Link to="/" className="item">Projects</Link>
      <Link to="/" className="item">Photography</Link>
      <Link to="/about" className="item">About</Link>
    </nav>
  )
}
export default Navbar