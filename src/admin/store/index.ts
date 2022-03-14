import { createStore, combineReducers, compose } from 'redux';
import { reducer as adminReducer, IPageSchemaState } from './reducers';

export interface RootState {
  admin: IPageSchemaState;
}

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
