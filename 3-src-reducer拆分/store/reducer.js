import TodoApp from './TodoApp';
import CarApp from './CarApp'
const initState = {}

export default (state = initState, action) => {
  return{
    todo:TodoApp(state.todo,action),
    car:CarApp(state.car,action)
  }
}