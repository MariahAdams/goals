import { GOALS_LOAD } from './reducers';
import { loadGoals } from './actions';


describe('goals action creators', () => {
  

  it('creates a load action', () => {
    const { type } = loadGoals();
    expect(type).toBe(GOALS_LOAD);
  });
});