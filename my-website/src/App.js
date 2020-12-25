import React from 'react';
import Navbar from './navbar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Project from './Pages/Project.js'
// import Photography from './Pages/Photography.js'
import Experience from './Pages/Experience.js'

const Footer = () =>{
    return (
        <div className='container middle-center' style={{backgroundColor: '#7E4D4E'}}>
            <p style={{color: 'white'}}>--- Built by Yinuo Hu with React ---</p>
        </div>
    );
  }

function App(){
 return(
  <>
   <Router>
    <Navbar />
    <Switch>
     <Route path="/about" component={About}></Route>
     <Route path="/project" component={Project}></Route>
     <Route path="/experience" component={Experience}></Route>
     <Route path="/" component={Home}></Route>
    </Switch>
   </Router>
   <Footer></Footer>
  </>

 )
}

export default App;