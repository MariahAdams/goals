import { GOALS_LOAD } from './reducers';
import { loadGoals } from './actions';
import { getAllGoals } from '../../services/goalsApi';


describe('goals action creators', () => {
  

  it('creates a load action', () => {
    const { type, payload } = loadGoals();
    expect(type).toBe(GOALS_LOAD);
    expect(payload).toBe(getAllGoals());
  });
});