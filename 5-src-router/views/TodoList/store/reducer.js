import { INIT_TODO_LIST,GET_TODO_ADD,INPUT_VAL_CHG } from './actionTypes';
const initState={
  inputVal:'',
  todoList:[]
}

export default(state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===INIT_TODO_LIST){
    newState.todoList=action.list;
  }
  if(action.type=== GET_TODO_ADD){
    let lastId=newState.todoList[newState.todoList.length-1];
    let id=lastId? lastId+1:1;
    newState.todoList.push({
      id:id,
      name:newState.inputVal
    })
  }
  if(action.type===INPUT_VAL_CHG){
    newState.inputVal=action.value
  }
  
  return newState;
}