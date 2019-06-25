import {INIT_TODO_LIST} from './actionTypes';

export const getInitTodoListAction=(list)=>({
    type:INIT_TODO_LIST,
    list
})