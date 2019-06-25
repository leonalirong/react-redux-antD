import { createStore, combineReducers } from 'redux';
import todoReducer from '../views/TodoList/store/reducer';

export default createStore(
  combineReducers({
    todo:todoReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
