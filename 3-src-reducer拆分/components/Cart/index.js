import React from 'react';
import store from '../../store';
import { shortCart,addCart } from '../../store/actionCreat'
import Goods from './goods';
import Car from './car'
import './index.css'

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={
      goodsList:store.getState().car.goodsList,
      carList:store.getState().car.carList
    }
    store.subscribe(()=>{
      this.setState({
        goodsList:store.getState().car.goodsList,
        carList:store.getState().car.carList
      })
    })
  }
  render(){
    return(
      <div className="box">
        <Goods 
        goodsList={ this.state.goodsList } 
        shortCut={this.shortCut } 
        addCar={ this.addCar }/>

        <Car carList={ this.state.carList } />
      </div>
    )
  }
  shortCut(good){
    store.dispatch(shortCart(good))
    // let action={
    //   type:'SHORTCART',
    //   value:good
    // }
    // store.dispatch(action)
  }

  addCar(good){
    store.dispatch(addCart(good))
    // let action={
    //   type:'ADDCART',
    //   value:good
    // }
    // store.dispatch(action)
  }
}
export default Cart;