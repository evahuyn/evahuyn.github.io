import React from 'react';
import bubbleImage from '../photos/bubble.jpg'

function Photography(){
 return(
  <>
   <SlideShow />
   <FirstSection />
   <SecondSection />
  </>

 )
}

const SlideShow = () =>{
 return <div className="slideShow">
  <img src={bubbleImage}
  style = {{width: "100%"}}
  />
 </div>
}

const FirstSection = () =>{
 return (
  <div className='firstSection'>
   <h2>Section 1</h2>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div className='secondSection'>
   <h2>Section 2</h2>
  </div>
 )
}

export default Photography;