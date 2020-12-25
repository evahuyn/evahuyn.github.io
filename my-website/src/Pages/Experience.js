import React from 'react';

function Experience(){
 return(
  <>
   <FirstSection />
   <SecondSection />
   {/* <ThirdSection /> */}
  </>

 )
}

const FirstSection = () =>{
 return (
  <div className='fontBody container' style={{paddingTop: "15vh", paddingBottom: "3vh", backgroundColor: "#429E9F"}}>
    <h2>My Experiences</h2>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div className='fontBody middle-center' style={{backgroundColor: "#A5C5C3"}} >
    {/* <h2 style={{marginBottom: '3vh', marginTop:'3vh'}}>My Projects</h2> */}

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh", marginTop:"5vh"}}>
      <h2>Appointment Peer Tutor</h2>
      <h3>Part-time job at UNC Learning Center</h3>
      <ul>
          <li>One-to-One tutoring service to UNC undergraduate students on computer science, math, sociology, and chinese courses;</li>
          <li>Work collaborately with students to resolve difficulties in practice problems and destructure complex theories and concepts;</li>
          <li>Thoroughly communicate with students to understand their learning status and designed individualized study plans and learning strategies;</li>
      </ul>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>Event Service Operation Assistant</h2>
      <h3>Part-time job at UNC Carolina Union</h3>
      <ul>
          <li>Communicated with customers to understand demands, provided effective feedback and solved problems efficiently;</li>
          <li>Corporated with employees from other departments on site layout designs and staff arrangement of activities with over
200 people;</li>
      </ul>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>Undergraduate Research Assistant</h2>
      <h3>Part-time job at UNC Dr.Ryoo's lab</h3>
      <ul>
          <li>Translated the video data into transcripts, and encoded the transcripts with a coding scheme using the countif function in
Excel to efficiently auto-code preprocessed texts;</li>
        <li>Conducted data cleaning and pre-processing for log data to prepare for data analysis;</li>
          <li>Applied statistical methods to conduct quantitative analysis using R language, and performed qualitative analysis with
participant observation method to understand how students’ behaviors changed before and after receiving feedback;
</li>
        <li>Redesigned the user interface of the original web-based modeling tools using JavaScript, HTML & CSS by replacing the
        plain modeling activity with story-line based modeling activity to promote students’ participation, and the new modeling
        system is currently in use;</li>

      </ul>
    </div>
 
   </div>
 )
}

const ThirdSection = () =>{
 return (
  <div className='thirdSection fontBody middle-center'>
    <h2 style={{marginBottom: '3vh', marginTop:'3vh', color: 'white'}}>My Research</h2>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h3>Analysis of How can Automated Feedback Engage Students in Developing and
Explaining Models</h3>
      <p>The project aimed to analyze how automated feedback can help students in modeling activities;</p>
      <a href='#' target='_blank'>Explore More</a>
    </div>
  </div>
  
 )
}

export default Experience;