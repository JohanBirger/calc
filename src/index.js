import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Calculator from './components/Calculator/Calculator'
import ReactDOM from 'react-dom'
import './App.css'




export default function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/calculator" component={Calculator}/>
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'))