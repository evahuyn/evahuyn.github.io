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
    <div style={{minHeight: "91vh"}}>
       <div className = "container fontBody firstSection" style={{paddingTop:"15vh", display: "flex", justifyContent: "space-evenly", paddingBottom: "10vh"}}>
        <div>
            <h1 style={{fontSize: "3vw"}}>Yinuo "Eva" Hu</h1>
            <h4 style={{fontSize: "1.5vw"}}>Computer Science B.S. | Sociology</h4>
            <h4 style={{fontSize: "1.5vw"}}>Junior, University of North Carolina at Chapel Hill</h4>
            <p style={{fontSize: "1.2vw", width: "42vw"}}
            >With an academic background of Computer Science and Sociology, I engaged in multiple computer programming and data analysis projects with proficiency in Java, Python, R, C languages, and developed logical thinking and efficient study abilities.  With overseas study experiences, I acquired international visions and cross-cultural communication and collaboration skills. </p>
        </div>
        <img style={{width: "20%"}}src={meImage}/>
        </div>
  
        <div className="fontBody" style={{paddingLeft: '15vw', paddingRight:'15vw', marginBottom:'5vh'}}>
            <h4 style={{fontSize: "2vw"}}>My Passion</h4>
            <p style={{fontSize: "1.2vw"}}>
                Studying both Computer Science and Sociology, I hope to find an intersection between the two areas. While developing sociological perspective to view and analyze real-world social phenomena, I wish to utilize technology to help resolve some current social conflicts or to help those in needs. Technology should be more than merely chasing for higher quality and higher efficiency, the concerning of humanity aspects should be reminded and emphasized. 
            </p>
        </div>

        <div className="fontBody" style={{paddingLeft: '15vw', paddingRight:'15vw', marginBottom:'5vh'}}>
            <p style={{fontSize: "1.2vw"}}><strong>Email: </strong>huyinuo@live.unc.edu
            </p>
            <p style={{fontSize: "1.2vw"}}><strong>Wechat: </strong>Eva_HUyn</p>
        </div>
     </div>

 );
}

export default About;