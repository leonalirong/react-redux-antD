import { connect } from 'react-redux';
import TodoListUi from './ui';
import { getFetchTodoListAction, getTodoAddAction, getInputValChgAction } from './store/actionCreates'

/**
 * mapStatetToProps 从仓库的state中获取数据，并作为UI组件的props传递下去
 * @param {object} state 仓库中的state数据
 */

 const mapStatetToProps=( { todo })=>{
  // console.log(todo)
  return{
    todoList:todo.todoList,
    inputVal:todo.inputVal
  }
 }

 /**
 * 2.2. mapDispathToPorps  将 某些方法传递给 ui组件
 * @param {Function} dispatch store.dispath
 */

 const mapDispathToPorps= dispatch =>{
   return{
    getInitTodoList(){
      dispatch(getFetchTodoListAction())
    },
    onClick(){
      dispatch(getTodoAddAction())
    },
    onInputChg(event){
      let value=event.target.value;
      dispatch(getInputValChgAction(value))
    }
   }
 }

 export default connect(
   mapStatetToProps,
   mapDispathToPorps
 )(TodoListUi)