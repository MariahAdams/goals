import { GOALS_LOAD, GOAL_LOAD } from './reducers';
import { getAllGoals, getGoal } from '../../services/goalsApi';
import { getGoalList, getGoalsById } from './reducers';

export const loadGoals = () => (dispatch, getState) => {
  const goalList = getGoalList(getState());
  if(goalList.length) return;
  
  dispatch({
    type: GOALS_LOAD,
    payload: getAllGoals()
  });
};

export const loadGoal = id => (dispatch, getState) => {
  const goal = getGoalsById(getState(), id);
  if(goal) return;

  dispatch({
    type: GOAL_LOAD,
    payload: getGoal(id)
  });
};

export const clearGoal = () => ({
  type: GOAL_LOAD,
  payload: null
});