import { goalsById, GOALS_LOAD } from './reducers';

describe('goals reducers', () => {

  it.only('initializes to empty object', () => {
    const state = {};
    expect(state).toEqual({});
  });

  it('loads a goal', () => {
    const data = { name: 'train for a marathon' };
    const state = goalsById({}, {
      type: GOALS_LOAD,
      payload: data
    });
    expect(state).toBe(data);
  });
});