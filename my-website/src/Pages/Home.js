import React from 'react';

function Home(){
 return(
  <>
   <FirstSection />
   <SecondSection />
   <ThirdSection />
  </>

 )
}

const FirstSection = () =>{
 return (
  <div className='firstSection fontBody container' style={{paddingTop: "15vh", paddingBottom: "3vh"}}>
    <h2>胡一诺 Yinuo "Eva" Hu</h2>
    <h4>Computer Science B.S. & Sociology | University of North Carolina at Chapel Hill</h4>
    <h4>计算机 & 社会学 | 美国北卡大学教堂山分校</h4>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div className='secondSection fontBody middle-center' >
    <h2 style={{paddingBottom: '3vh'}}>My CS Projects</h2>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw"}}>
      <h3>Making Science Visible Project Website</h3>
      <p>Built for Making Science Visible team to display research findings and visualilzations</p>
      <a href='http://ryoo-dept-soe.cloudapps.unc.edu/nsf/' target='_blank'>Check it here</a>
    </div>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw"}}>
      <h3>Miao Miao Social Networking Platform</h3>
      <p>A Revolutionary Social App</p>
      <p>Unlike other social apps where friends are recommended to you based on your friends list, Miao Miao contains a personality test and will recommend people based on the test result.</p>
      <a href='https://miaomiao-chat.herokuapp.com/' target='_blank'>Check it here</a>
    </div>
  </div>
 )
}

const ThirdSection = () =>{
 return (
  <div className='thirdSection fontBody middle-center'>
    <h2>My Research</h2>
  </div>
 )
}

export default Home;