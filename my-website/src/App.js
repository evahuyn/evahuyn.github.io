import React from 'react';
import Navbar from './navbar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Project from './Pages/Project.js'
import Photography from './Pages/Photography.js'


function App(){
 return(
  <>
   <Router>
    <Navbar />
    <Switch>
     <Route path="/about" component={About}></Route>
     <Route path="/project" component={Project}></Route>
     <Route path="/photography" component={Photography}></Route>
     <Route path="/" component={Home}></Route>
    </Switch>
   </Router>
  </>

 )
}

export default App;