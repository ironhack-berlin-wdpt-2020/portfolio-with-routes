import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Education from './components/Education';
import EducationDetail from './components/EducationDetail'

import { Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends React.Component {

  state = {
    loggedIn: true
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
          </ul>
        </nav>
        <Switch>
          {/* only matches exactly "/" */}
          <Route exact path="/" component={Home} />

          <Route exact path="/education" render={() => {
            if (this.state.loggedIn) {
              return <Education></Education>
            } else {
              return <Redirect to="/"></Redirect>
            }
          }}></Route>
          <Route path="/education/:id" component={EducationDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
