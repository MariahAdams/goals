import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoalsById } from './reducers';
import { loadGoal } from './actions';

class GoalDetail extends PureComponent {

  static propTypes = {
    loadGoal: PropTypes.func.isRequired,
    match: PropTypes.object,
    goal: PropTypes.object
  };

  componentDidMount() {
    const { loadGoal, match } = this.props;
    loadGoal(match.params.id);
  }
  
  render() { 
    const { goal } = this.props;
    if(!goal) return null;

    return (
      <article>
        <h3>Goal Detail</h3>
        <h3>Goal: {goal.name}</h3>
      </article>
    );
  }
}
 
export default connect(
  (state, { match }) => ({
    goal: getGoalsById(state, match.params.id)
  }),
  { loadGoal }
)(GoalDetail);