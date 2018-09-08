import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';
import { user, checkedAuth } from '../components/auth/reducers';
import { goalsById, goalList } from '../components/goals/reducers';

const combined = combineReducers({
  error,
  loading,
  user,
  checkedAuth,
  goalsById,
  goalList
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;