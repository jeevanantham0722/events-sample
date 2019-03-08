import "./eventform.css";
import React, { Component } from 'react';
import './eventdetails.css'

class Edls extends React.Component {

  constructor(props){
    super(props);
    this.state ={item: null,
    }
}

componentDidMount(){

  fetch('http://192.168.2.104:4000/tasks')
        
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
    
}
render(){
  var url = window.location.pathname
  var id =/[^/]*$/.exec(url)[0];
var {isLoaded, items} = this.state;
    if(!isLoaded){
    return <div>Loading.....</div>;
    }
    else {
return (
  <section>
  {items.map((item) =>{
    if (item._id=== id){
      return(
      <div className = "container">
      
      <div class ="row">
      
        <div class="col-md-4">
        <img  
              src={item.imgUrl}
              class="imgResponsive"         
            />
            </div>
            <div class="col-md-8 col-xs-12">
            <div class="jumbotron">
              <h3>{item.Evdls}</h3>
              <hr/>
              <h4>{item.Time}</h4>
              <hr/>
              <h4>{item.Location}</h4>
              <h4>
              <span class="WebRupee">&#x20B9;</span> {item.Fee}
              </h4>
              <br/>
              <button type="button" class="btn btn-primary btn-block">BOOK TICKETS</button>
                 </div>
                </div>
       </div>
          
       <div class ="row">   
                 <div class="col-md-8 col-xs-12">
                <h3 class='text-left'>Details</h3>
                <p div class ='text-justify'>{item.Details}</p>
                 </div>
                 <div class="col-md-4 col-xs-12">
                 <div class ='row'>
                 <button type="button" class="btn btn-primary btn-block">Corporate Booking<i class="fa fa-archive"></i></button>
                 
                 </div>
                 <hr/>
                 <br/>
                 <div class ='row'>
                 <p div class ='text-justify'>Please enter your contact number. We will connect you with the organizer</p>
                 <div class="inner-addon left-addon">
                    <input type="text" class="form-control" />
                </div>
                 </div>
                 </div>

                </div> 

            </div>
      )

    }
  }
  )}
  </section>
)
    }
}
}

 export default Edls;