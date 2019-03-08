import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Edls from "./form/eventdetails";
import Eform from "./form/eventform";
import Createeve from "./CreateEvent/Createeve";


class App extends Component {
  render(
    
    ) {
    return (
      
      <BrowserRouter>
    
        <Switch>
     
          <Route exact path={"/"} component={Home} />
          <Route path={"/eventdetails/:userId"} component={Edls} />
          <Route path={"/eventform"} component={Eform}/>
          <Route path={"/Createeve"} component={Createeve}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
