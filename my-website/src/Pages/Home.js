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
  <div className='firstSection fontBody middle-center' style={{paddingTop: "13vh"}}>
    <h2>Yinuo "Eva" Hu's Cite</h2>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div className='secondSection fontBody middle-center'>
    <h2>My CS Projects</h2>
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