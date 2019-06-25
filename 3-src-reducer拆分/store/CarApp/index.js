import { SHORTCART,ADDCART} from '../actionTypes'

const initState = {
  goodsList:[
    { id: 1, name: 'apple', price: 10 },
    {id:2,name:'banana',price:11},
    {id:3,name:'orange',price:15},
    {id:4,name:'grape',price:18}
  ],
  carList:[]
}

export default (state = initState, action) => {
    let good=action.good;
    let newSate=JSON.parse(JSON.stringify(state));
    let index=state.carList.findIndex(item=>item.id===good.id)

  switch (action.type) {
    case SHORTCART:
      if(index>-1){
        if(newSate.carList[index].num>1){
          newSate.carList[index].num--;
          newSate.carList[index].total-=newSate.carList[index].price
        }else{
          newSate.carList.splice(index,1);
        }
      }
      return newSate;

    case ADDCART:
      //console.log(good);
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