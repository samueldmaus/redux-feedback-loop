import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';
import Supported from '../Supported/Supported.js'
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments.js';
import Review from '../Review/Review.js';
import CompletedFeedback from '../CompletedFeedback/CompletedFeedback';

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
            <h3><Link to="/">Home</Link></h3>
          </header>
          <br/>
          <p><Link to="/feeling">CLICK HERE</Link> to leave feedback for:</p>
          <p>{date}</p>
        </div>
        <Route exact path="/feeling" component={Feeling}/>
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/comments"  component={Comments} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/completed" component={CompletedFeedback} />
      </Router>

    );
  }
}

export default App;
