import { INIT_TODO_LIST,FETCH_TODO_LIST } from './actionTypes';

export const getInitTodoListAction = (list) => ({
	type: INIT_TODO_LIST,
	list
})

export const getFetchTodoListAction=()=>({
	type:FETCH_TODO_LIST,
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