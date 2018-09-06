import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoalItem from './GoalItem';
import styles from './Goals.css';

class Goals extends Component {

  static propTypes = {
    goals: PropTypes.array
  };
  
  render() { 
    // const { goals } = this.props;

    return (
      <section className={styles.goals}>
        <h2>Hello Goals!</h2>
        <ul className="list">
          {/* {goals.map(id => <GoalItem key={id} id={id}/>)} */}
          <GoalItem/>
        </ul>
      </section>
    );
  }
}
 
export default Goals;