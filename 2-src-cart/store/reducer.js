const initState = {
  inputVal: '',
  todoList: [],
  goodsList:[
    {id:1,name:'apple',price:10},
    {id:2,name:'banana',price:11},
    {id:3,name:'orange',price:15},
    {id:4,name:'pell',price:18}
  ],
  carList:[]
}

export default (state = initState, action) => {

  switch (action.type) {
    case 'CHGINPUT':
      return Object.assign({}, state, {
        inputVal: action.value
      });

    case 'TODOADD':
      return Object.assign({}, state, {
        todoList: [...state.todoList, state.inputVal]
      });

    case 'SHORTCART':
      let good1=action.value;
      let newSate1=JSON.parse(JSON.stringify(state));
      let index1=state.carList.findIndex(item=>item.id===good1.id)
      if(index1>-1){
        if(newSate1.carList[index1].num>1){
          newSate1.carList[index1].num--;
          newSate1.carList[index1].total-=newSate1.carList[index1].price
        }else{
          newSate1.carList.splice(index1,1);
        }
      }
      return newSate1;

    case 'ADDCART':
      let good=action.value;
      let newSate=JSON.parse(JSON.stringify(state));
      let index=state.carList.findIndex(item=>item.id===good.id)
      if(index>-1){
        newSate.carList[index].num++
        newSate.carList[index].total+=newSate.carList[index].price
      }else{
        newSate.carList.push({...good,...{num:1,total:good.price}})
      }
      return newSate;

    default:
      return state;
  }
}