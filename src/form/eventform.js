import React, { Component } from 'react';
import "./eventform.css"
import Edls from './eventdetails';
import { Header } from '../header/header';
import Footer from '../Fotter/footer';

class Eform extends Component {
  render(){
    return(
        <div className ="container">
        <Header/>
        <form>       
        
        <Edls/>
        <br/>
        <Footer/>
        </form>
        
        </div>
    )
  }
}
export default Eform

