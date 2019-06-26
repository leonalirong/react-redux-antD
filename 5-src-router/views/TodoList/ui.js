import React, { Component } from 'react'
import { TodoListWarp,TodoInputWarp } from'./style.js'
import { Input,Button, List } from 'antd';

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
  render() {
    let {todoList,onClick,inputVal,onInputChg}=this.props;
    return (
      <TodoListWarp>
        <TodoInputWarp>
          <Input placeholder="请输入" value={ inputVal } onChange={ onInputChg }/>
          <Button type="primary" onClick={ onClick }>ADD</Button>
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
    this.props.getInitTodoList();
    // fetch('http://localhost:3001/todoList')
    // .then(response=>response.json())
    // .then(res=>{
    //   store.dispatch(getInitTodoListAction( res))
    // })
    // store.dispatch(fetchInitTodoListAction())
  }
}
