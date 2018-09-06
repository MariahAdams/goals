import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GoalItem extends Component {

  static propTypes = {
    goal: PropTypes.object
  };

  render() { 
    // const { goal } = this.props;

    return (
      <li>
        <h4>GOAL ITEM</h4>
        {/* <Link to={`/goals/${goal._id}`}>{goal.name}</Link> */}
      </li>
    );
  }
}
 
export default GoalItem;