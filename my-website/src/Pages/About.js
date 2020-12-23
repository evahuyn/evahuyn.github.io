import React from 'react';
import meImage from '../photos/me.jpg'

function About(){
 return(
  <>
   <Section1 />
  </>

 )
}

const Section1 = () =>{
 return(
  <div className = "container fontBody firstSection" style={{paddingTop:"15vh", display: "flex", justifyContent: "space-evenly", paddingBottom: "10vh"}}>
   <div>
    <h1 style={{fontSize: "3vw"}}>Yinuo "Eva" Hu</h1>
    <h4 style={{fontSize: "1.5vw"}}>Computer Science B.S. | Sociology</h4>
    <h4 style={{fontSize: "1.5vw"}}>Junior, University of North Carolina at Chapel Hill</h4>
    <p style={{fontSize: "1.2vw", width: "40vw"}}
    >With an academic background of Computer Science and Sociology, I engaged in multiple computer programming and data analysis projects with proficiency in Java, Python, R, C languages, and developed logical thinking and efficient study abilities.  With overseas study experiences, I acquired international visions and cross-cultural communication and collaboration skills. </p>
   </div>
   <img style={{width: "20%"}}src={meImage}/>
  </div>
 );
}

export default About;