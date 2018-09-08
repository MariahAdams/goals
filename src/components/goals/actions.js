import { GOALS_LOAD, getGoalList } from './reducers';
import { getAllGoals } from '../../services/goalsApi';

export const loadGoals = () => (dispatch, getState) => {
  const goalList = getGoalList(getState());
  if(goalList.length) return;

  dispatch({
    type: GOALS_LOAD,
    payload: getAllGoals()
  });
};

