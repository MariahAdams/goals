import { GOALS_LOAD, getGoalList, getGoalsById, GOAL_LOAD } from './reducers';
import { getAllGoals, getGoal } from '../../services/goalsApi';

export const loadGoals = () => (dispatch, getState) => {
  const petList = getGoalList(getState());
  if(petList.length) return;
  
  dispatch({
    type: GOALS_LOAD,
    payload: getAllGoals()
  });
};

export const loadGoal = id => (dispatch, getState) => {
  const goal = getGoalsById(getState(), id);
  if(goal && goal.userId) return;

  dispatch({
    type: GOAL_LOAD,
    payload: getGoal(id)
  });
};

export const clearGoal = () => ({
  type: GOAL_LOAD,
  payload: null
});