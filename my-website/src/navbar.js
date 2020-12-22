import React from 'react'
import './navbar.css'
class Navbar extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 70) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render(){
  return (
    <div>
    <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
    <p>Home</p>
    <p>Projects</p>
    <p>Photography</p>
    <p>About me</p>
    </div>
    </div>
  );}
}
export default Navbar