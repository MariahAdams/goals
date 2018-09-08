import { goalsById, GOALS_LOAD, GOAL_LOAD, goalList } from './reducers';
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

  describe('goalsById', () => {

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

  describe.only('goalList', () => {

    it('initializes to an empty array', () => {
      const state = [];
      expect(state).toEqual([]);
    });

    it('returns list of goal ids', () => {
      const payload = [goal1, goal2];
      const state = goalList([], {
        type: GOALS_LOAD,
        payload
      });
      expect(state).toEqual([goal1._id, goal2._id]);
    });

    it('clears on logout', () => {
      const state = goalList([], {
        type: LOGOUT
      });
      expect(state).toEqual([]);
    });

  });

});