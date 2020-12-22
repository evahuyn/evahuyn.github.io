import React from 'react';
import Navbar from './navbar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'

function App(){
 return(
  <>
   <Router>
    <Navbar />
    <Switch>
     <Route path="/about" component={About}></Route>
     <Route path="/" component={Home}></Route>
    </Switch>
   </Router>
  </>

 )
}

export default App;