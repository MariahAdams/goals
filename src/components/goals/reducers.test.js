import { goalsById, GOALS_LOAD, GOAL_LOAD } from './reducers';
import { LOGOUT } from '../auth/reducers';

describe('goals reducers', () => {

  const goal1 = {
    _id: '123',
    name: 'train for a marathon'
  };

  const goal2 = {
    _id: '456',
    name: 'meal prep'
  };

  it('initializes to empty object', () => {
    const state = [];
    expect(state).toEqual([]);
  });

  it('loads all goals', () => {
    const payload = [goal1, goal2];
    const state = goalsById({}, {
      type: GOALS_LOAD,
      payload
    });
    expect(state).toEqual({ '123': goal1, '456': goal2 });
  });

  it('loads a single goal', () => {
    const payload = goal1;
    const state = goalsById({}, {
      type: GOAL_LOAD,
      payload
    });
    expect(state).toEqual({ '123': payload });
  });

  it('clears goals on logout', () => {
    const state = goalsById({}, {
      type: LOGOUT
    });
    expect(state).toEqual({});
  });

});