import { takeEvery,  put } from 'redux-saga/effects';
import { getInitTodoListAction} from './actionCreates'
import { FETCH_TODO_LIST } from './actionTypes'

function* fetchTodoList(){
  let response=yield fetch('http://localhost:3001/todoList');
  let res=yield response.json();
  // console.log(res);
  yield put(getInitTodoListAction(res)) 
}

const todoSaga = function* () {
  console.log(111);
  // takeEvery('动作类型',要做的事) 监听store.dispatch派发的事情
  yield takeEvery(FETCH_TODO_LIST,fetchTodoList)
}
export default todoSaga;
