import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';

class App extends Component {
  render() {
    let today = new Date();
    let date = (today.getMonth()+1)+ '/' + today.getDate() + '/' + today.getFullYear();
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <p><Link to="/feeling">CLICK HERE</Link> to leave feedback for:</p>
          <p>{date}</p>
        </div>
        <Route exact path="/feeling" component={Feeling}/>
        
      </Router>

    );
  }
}

export default App;
