import React from 'react';
import search from './search.svg';
import "./form.css";
import { FormResults } from './formResults';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp() {
    debugger;
    // document.getElementById('events').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      // document.getElementById('events').className = 'noDisplay';
    }

    

    fetch(`http://localhost:4000/tasks`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const events = data.events;
          this.setState({ events });
        });
      })

      .catch(err => {
        console.log('Fetch Error :-S', err);
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} id="form">
        <img src={search} alt="search icon" className="searchIcon" />
        <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a Events" required />
        <FormResults events={this.state.events}/>
      </form>
    );
  }
}
