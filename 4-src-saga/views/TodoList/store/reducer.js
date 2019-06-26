import { INIT_TODO_LIST } from './actionTypes';
const initState={
  inputVal:'',
  todoList:[]
}

export default(state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===INIT_TODO_LIST){
    newState.todoList=action.list;
  }
  return newState;
}