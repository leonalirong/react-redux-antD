import React from 'react';
import store from '../../store';
import { chgInput,todoAdd } from '../../store/actionCreat';
import InputBlock from './InputBlock';
import TodoList from './TodoList';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:store.getState().todo.inputVal,
      todoList:store.getState().todo.todoList
    }
    store.subscribe(()=>{
      this.setState({
        inputVal:store.getState().todo.inputVal,
        todoList:store.getState().todo.todoList
      })
    })
  }
  render(){
    return(
      <div>
        <InputBlock inputVal={ this.state.inputVal } onChange={ this.chg} onClick={ this.add}/>
        <TodoList  todoList={ this.state.todoList }/>
      </div>
    )
  }
  chg(event){
    let value=event.target.value;
    store.dispatch( chgInput(value) )
    // let action={
    //   type:'CHGINPUT',
    //   value
    // }
    // store.dispatch(action)
  }
  add(){
    store.dispatch(todoAdd())
    // store.dispatch({
    //   type:'TODOADD'
    // })
  }

 
}
export default TodoApp

