// import { LOGOUT } from '../auth/reducers';

export const GOALS_LOAD = 'GOALS_LOAD';


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
    default: 
      return state;
  }
}