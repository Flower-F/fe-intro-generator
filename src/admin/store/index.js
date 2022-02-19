import { createStore, combineReducers } from 'redux';
import adminReducer from './reducers';

const reducer = combineReducers({
  admin: adminReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
