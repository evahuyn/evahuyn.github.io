import React from 'react';

function About(){
 return(
  <>
   <Section1 />
  </>

 )
}

const Section1 = () =>{
 return(
  <div className = "container" style={{paddingTop:"12vh"}}>
   <div>
    <h1>Yinuo "Eva" Hu</h1>
    <h4>University of North Carolina at Chapel Hill</h4>
    <p>Some introduction of me</p>
   </div>
   <img src="../../photos/me.jpg"/>
  </div>
 );
}

export default About;