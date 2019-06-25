import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import todoReducer from '../views/TodoList/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    todo:todoReducer
  }),
  composeEnhancers(// 让代码运行的时候redux的观察器显示
     applyMiddleware(thunk,logger)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && 
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);
