import React, {useEffect, useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Graph from "./pages/Graph";
import Symptoms from "./pages/Symptoms";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return(
    <Router>
     <div>
       <Nav />
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/graph" component={Graph} />
          <Route path="/about" component={About} />
          <Route path="/symptoms" component={Symptoms} />
       </Switch>
     </div>  
    </Router>
  );
}

export default App;
