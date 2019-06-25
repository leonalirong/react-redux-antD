import {
  CHGINPUT,
  TODOADD
} from '../actionTypes';

const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {

  switch (action.type) {
    case CHGINPUT:
      return Object.assign({}, state, {
        inputVal: action.value
      });

    case TODOADD:
      return Object.assign({}, state, {
        todoList: [...state.todoList, state.inputVal]
      });

    default:
    return state;
  }
}