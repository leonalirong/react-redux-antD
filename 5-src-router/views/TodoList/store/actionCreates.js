import { INIT_TODO_LIST,FETCH_TODO_LIST,GET_TODO_ADD, INPUT_VAL_CHG } from './actionTypes';

export const getInitTodoListAction = (list) => ({
	type: INIT_TODO_LIST,
	list
})

export const getFetchTodoListAction=()=>({
	type:FETCH_TODO_LIST,
})
export const getTodoAddAction=()=>({
	type:GET_TODO_ADD
})
export const getInputValChgAction=(value)=>({
	type:INPUT_VAL_CHG,
	value
})
// redux-thunk
// export const fetchInitTodoListAction = () => {
// 	return (dispatch,getState) => {
// 		fetch('http://localhost:3001/todoList')
// 			.then(response => response.json())
// 			.then(res => {
// 				dispatch(getInitTodoListAction(res))
// 			})
// 	}
// }