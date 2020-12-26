import React from 'react';

function Project(){
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
  <div className='fontBody container' style={{paddingTop: "15vh", paddingBottom: "3vh", backgroundColor: '#FEB607'}}>
    <h2>My Projects</h2>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div className='fontBody middle-center' style={{backgroundColor:'#f2f4f2'}}>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh", marginTop: "3vh"}}>
      <h2>Miao Miao Social Networking Platform</h2>
      <p>A Revolutionary Social App</p>
      <p><strong>Intention: </strong>Unlike other social apps where friends are recommended to you based on your friends list, Miao Miao contains a personality test and will recommend people based on the test result.</p>
      <p><strong>Built with: </strong>JavaScript, HTML & CSS, Firebase backend, Bad_words API, Open Trivia DB</p>
      <a className='button' href='https://miaomiao-chat.herokuapp.com/' target='_blank'>Explore More</a>
      <p>**Note: If located in China, might need VPN to open it</p>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>Making Science Visible Project Website</h2>
      <p><strong>Intention: </strong>Built for Making Science Visible team to display research findings and visualilzations</p>
      <p><strong>Built with: </strong>JavaScript, HTML & CSS</p>
      <a className='button' href='http://ryoo-dept-soe.cloudapps.unc.edu/nsf/' target='_blank'>Explore More</a>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>Covid19 Toolkit</h2>
      <p><strong>Intention: </strong>The United States has the highest number of Covid-19 cases around the world. It’s been almost half a year since the huge outbreak in the United States but we still see the curve of cases not slowing down. It is critical to educate the public about the basic facts and approaches of prevention to stop further spread of the disease. So we created a Covid-19 Toolkit to help people of all ages learn basic statistics, symptoms, and prevention of Covid-19.</p>
      <p><strong>Built with: </strong>ES6 functions, Jquery, HTML & CSS, Arduino</p>
      <a className='button' href='https://devpost.com/software/how-to-get-away-from-covid-19' target='_blank'>Explore More</a>
      <p>**Note: If located in China, might need VPN to open it</p>
    </div>
 
    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>System of Managing Food Expiration in Refrigerators</h2>
      <p><strong>Intention: </strong>We all have encountered the problem when we opened our fridge and found something went expired by surprise. With all the fruit, vegetable, dairy products we keep in the fridge and busy school works, it is hard and tiring to keep track of all the expiration dates manually. A lot of food ends up in the dumpster in this way. This not only leads to financial waste for students but also causes a huge waste of food. In order to prevent this major waste, We developed our Frigi-track, to remind people of the freshness of their food.</p>
      <p><strong>Built with: </strong>JavaScript, HTML & CSS, Quagga API</p> 
      <a className='button' href='https://devpost.com/software/fridge-track' target='_blank'>Explore More</a>
      <p>**Note: If located in China, might need VPN to open it</p>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h2>Platform for Activity Information Integration </h2>
      <p><strong>Intention: </strong>The project aimed to build an activity information integration platform, including personalized activity recommendations for users</p>
      <p><strong>Built with: </strong>JavaScript, HTML & CSS, Django</p>
      <a className='button' href='https://github.com/Elnifio/TutorHub' target='_blank'>View Source Code</a>
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

export default Project;