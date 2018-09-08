import { LOGOUT } from '../auth/reducers';

export const GOALS_LOAD = 'GOALS_LOAD';
export const GOAL_LOAD = 'GOAL_LOAD';

export const getGoalsById = state => state.getGoalsById;
export const getGoalList = state => state.goalList;

export function goalsById(state = {}, { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload.reduce((map, goal) => {
        map[goal._id] = { 
          ...state[goal._id],
          ...goal
        };
        return map;
      }, {});
    case GOAL_LOAD:
      return {
        ...state,
        [payload._id]: payload
      };
    case LOGOUT:
      return {};
    default: 
      return state;
  }
}

export function goalList(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload.map(goal => goal._id);
    case LOGOUT:
      return [];
    default: 
      return state;
  }
}