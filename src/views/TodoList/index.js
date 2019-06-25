import React, { Component } from 'react'
import { TodoListWarp,TodoInputWarp } from'./style.js'
import { Input,Button, List } from 'antd';
import { fetchInitTodoListAction } from './store/actionCreates'
import store from '@/store'

// redux-thunk 的实现原理
// let next =store.dispatch;
// store.dispatch= action =>{
//   if(typeof action==='function'){
//     action()
//   }else{
//     next(action);
//   }
// }

export default class todoList extends Component {
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
  render() {
    let {todoList}=this.state;
    return (
      <TodoListWarp>
        <TodoInputWarp>
          <Input placeholder="请输入" />
          <Button type="primary">ADD</Button>
        </TodoInputWarp>

        <List 
          dataSource={ todoList }
          renderItem={item=>{
            return <List.Item key={item.id}>{item.name}</List.Item>
          }}
          locale={{ emptyText:"暂无数据"}}
        />
      </TodoListWarp>
    )
  }

  componentDidMount(){
    // fetch('http://localhost:3001/todoList')
    // .then(response=>response.json())
    // .then(res=>{
    //   store.dispatch(getInitTodoListAction( res))
    // })
    store.dispatch(fetchInitTodoListAction())
  }
}
