import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
import Home from './Home';
import Auth from '../auth/Auth';
import Goals from '../goals/Goals';
import styles from './App.css';

class App extends Component {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <Fragment>
          <div className={styles.app}>
            <header>
              <h1>Gotta Have Goals</h1>
              <Header/>
            </header>

            <main>
              {checkedAuth &&
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/auth" component={Auth}/>
                  <PrivateRoute exact path="/goals" component={Goals}/>
                  <Redirect to="/"/>
                </Switch>
              }
            </main>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    checkedAuth: getCheckedAuth(state)
  }),
  { tryLoadUser }
)(App);