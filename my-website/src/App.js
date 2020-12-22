import React from 'react';
import Navbar from './navbar'

function App(){
 return(
  <>
   <Navbar />
   <SlideShow />
   <FirstSection />
   <SecondSection />
  </>

 )
}



const SlideShow = () =>{
 return <div className="slideShow">
  <img src="https://github.com/evahuyn/evahuyn.github.io/blob/master/my-website/photos/bubble.jpg?raw=true"
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

export default App;