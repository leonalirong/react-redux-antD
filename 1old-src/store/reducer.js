const initState={
  name:'张三'
}

export default (state=initState,action)=>{
  if(action.type==='SETNAME'){
    return {...state, name: action.value}
  }
  return state;
}