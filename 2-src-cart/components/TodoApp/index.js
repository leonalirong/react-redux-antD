import React from 'react';
import store from '../../store';
import InputBlock from './InputBlock';
import TodoList from './TodoList';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:store.getState().inputVal,
      todoList:store.getState().todoList
    }
    store.subscribe(()=>{
      this.setState({
        inputVal:store.getState().inputVal,
        todoList:store.getState().todoList
      })
    })
  }
  render(){
   // console.log(this.state.todoList)
    return(
      <div>
        <InputBlock inputVal={ this.state.inputVal } onChange={ this.chg} onClick={ this.add}/>
        <TodoList  todoList={ this.state.todoList }/>
      </div>
    )
  }
  chg(event){
    let value=event.target.value;
    let action={
      type:'CHGINPUT',
      value
    }
    store.dispatch(action)
  }
  add(){
    store.dispatch({
      type:'TODOADD'
    })
  }

 
}
export default TodoApp

