import React from 'react';

const itemStyle = {
 marginInline:"4vw",
 fontSize: "1.5vw",
}

const preStyle = {
 display: "flex",
 backgroundColor: "antiquewhite",
 alignItems: "center",
 justifyContent: "center",
 height: "10vh"
}

const Navbar = ()=>{
  return (
    <div className='navbar'
         style = {preStyle}
    >
      <p style={itemStyle}>Home</p>
      <p style={itemStyle}>Projects</p>
      <p style={itemStyle}>Photography</p>
      <p style={itemStyle}>About me</p>
    </div>
  )
}

export default Navbar;