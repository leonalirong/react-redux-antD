import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// 1. 引入 createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
// 2. 引入 sage 的处理文件
import todoSaga from '@/views/TodoList/store/todoSaga'

import todoReducer from '../views/TodoList/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 3. 创建 saga 的中间件
const sagaMiddleware=createSagaMiddleware();

export default createStore(
  combineReducers({
    todo:todoReducer
  }),
  composeEnhancers(// 让代码运行的时候redux的观察器显示
     applyMiddleware(sagaMiddleware)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && 
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 4. run todoSage
sagaMiddleware.run(todoSaga)
