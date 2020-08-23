import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js';
import Supported from '../Supported/Supported.js'
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments.js';
import Review from '../Review/Review.js';
import CompletedFeedback from '../CompletedFeedback/CompletedFeedback';
import Intro from '../Intro/Intro.js';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Admin from '../Admin/Admin.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <IconButton><Link to="/"><HomeIcon fontSize='large' /></Link></IconButton>
            <IconButton><Link to="/admin"><SupervisorAccountIcon fontSize='large' /></Link></IconButton>
          </header>
          <br/>
          <Intro component={withRouter(Intro)} />
        </div>
        <Route exact path="/feeling" component={Feeling}/>
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/comments"  component={Comments} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/completed" component={CompletedFeedback} />
        <Route exact path="/admin" component={Admin} />
      </Router>

    );
  }
}

export default App;
