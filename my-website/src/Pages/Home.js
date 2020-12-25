import React from 'react';
import image1 from '../photos/1.jpg'
import image2 from '../photos/2.jpg'
import image3 from '../photos/3.jpg'
import image4 from '../photos/4.jpg'
import image5 from '../photos/5.jpg'
import image6 from '../photos/6.jpg'

function Home(){
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
  <div className='fontBody container' style={{paddingTop: "15vh", paddingBottom: "3vh", backgroundColor: "#e3dbd8"}}>
    <h2>胡一诺 Yinuo "Eva" Hu</h2>
    <h4>Computer Science B.S. & Sociology | University of North Carolina at Chapel Hill</h4>
    <h4>计算机 & 社会学 | 美国北卡大学教堂山分校</h4>
  </div>
 )
}

const SecondSection = () =>{
 return (
  <div div className='fontBody middle-center' style={{backgroundColor: "#a6a29e"}}>
        <h2 style={{marginBottom: '3vh', marginTop:'3vh'}}>My Projects and Research</h2>
  <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"3vh", textAlign: "center"}}>
      <div className="row">
          <div className="col image1">
                <img src={image1} height="100%" width="100%" alt="focus1" className="image"/>
                      <div className="overlay1">
                          <div className="text">Miao Miao Social Networking Platform</div>
                      </div>
          </div>

          <div className="col image2">
              <img src={image2} height="100%" width="100%" alt="focus2" className="image"/>
                      <div className="overlay2">
                          <div className="text">Making Science Visible Project Website</div>
                      </div>
          </div>

          <div className="col image3">
              <img src={image3} height="100%" width="100%" alt="focus3" className="image"/>
              <div className="overlay3">
                  <div className="text">Covid19 Toolkit</div>
              </div>
          </div>          
      </div>

      <div className="row">
          <div className="col image4">
              <img src={image4} height="100%" width="100%" alt="focus4" className="image"/>
              <div className="overlay4">
                  <div className="text">System of Managing Food Expiration in Refrigerators</div>
              </div>
              
          </div>

          <div className="col image5">
              <img src={image5} height="100%" width="100%" alt="focus5" className="image"/>
              <div className="overlay5">
                  <div className="text">Platform for Activity Information Integration</div>
              </div>
          </div>

          <div className="col image6">
              <img src={image6} height="100%" width="100%" alt="focus6" className="image"/>
              <div className="overlay6">
                  <div className="text">How can automated feedback promote students' productive discourse?</div>
              </div>
          </div>          
      </div>
  </div>

</div>
 )
}

const ThirdSection = () =>{
 return (
  <div className='fontBody middle-center' style={{backgroundColor: '#e3dbd8'}}>
    <h2 style={{marginBottom: '3vh', marginTop:'3vh'}}>My Research</h2>

    <div className='container' style={{backgroundColor: 'rgb(255,255,255,0.6)', width:"80vw", marginBottom:"5vh"}}>
      <h3>Analysis of How can Automated Feedback Engage Students in Developing and
Explaining Models</h3>
      <p>The project aimed to analyze how automated feedback can help students in modeling activities;</p>
      <a href='#' target='_blank'>Explore More</a>
    </div>
  </div>
  
 )
}

export default Home;