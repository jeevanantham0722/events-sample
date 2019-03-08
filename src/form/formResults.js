import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./formResults.css";

// import { url } from "inspector";

export class  FormResults extends Component {

  constructor(props){
        super(props);
        this.state ={events: []
        }
  }

  componentDidMount(){

      fetch('http://192.168.2.104:4000/tasks')
            
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            events: json,
          })
        });
        
  }
  render(){
    
    var {isLoaded, events} = this.state;
    if(!isLoaded){

        return <div>Loading.....</div>;
    }
    else{
      return(
      
 
  <section>x
    <h2>Events</h2>
               
    <div className="newEvents">
      {events.map((event,userid) => {
        return (
          
          
          <Link to={{pathname: "/eventform/"+event._id} } key={event._id} className='eventLink '>
            
            <img
              src={
                event.imgUrl === ""
                  ? "http://via.placeholder.com/300x450"
                  : `${event.imgUrl}`
              }
              alt={`${event.imgUrl} poster`}
              className="imgResponsive"
            />
            <div className="eventInfo">
              <h6>{event.Evdls}</h6>
              
                 

            </div>
          </Link>
         
        );
      })}
    </div>
  </section>

      );
    }
  }
}
