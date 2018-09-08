import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGoalList } from './reducers';
import { loadGoals } from './actions';
import GoalItem from './GoalItem';
import styles from './Goals.css';

class Goals extends Component {

  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    goals: PropTypes.array
  };

  componentDidMount() {
    this.props.loadGoals();
  }
  
  render() { 
    const { goals } = this.props;
    if(!goals) return null;

    return (
      <section className={styles.goals}>
        <h2>Hello Goals!</h2>
        <Link to="/goals/new">Add a New Goal</Link>
        <ul className="list">
          {goals.map(goal => <GoalItem key={goal._id} id={goal}/>)}
        </ul>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    goals: getGoalList(state)
  }),
  { loadGoals }
)(Goals);