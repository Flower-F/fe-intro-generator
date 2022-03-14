import { createStore, combineReducers, compose } from 'redux';
import adminReducer from './reducers';

const reducer = combineReducers({
  admin: adminReducer,
});

type windowWithReduxExtension = Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
  };

const composeEnhancers =
  (window as windowWithReduxExtension).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const store = createStore(reducer, composeEnhancers());

export default store;
