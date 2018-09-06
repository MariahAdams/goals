import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Auth from '../auth/Auth';
import Goals from '../goals/Goals';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <div className={styles.app}>
            <header>
              <h1>Gotta Have Goals</h1>
              <Header/>
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/goals" component={Goals}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;