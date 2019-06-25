import React from 'react';

class Goods extends React.Component{
  render(){
    return(
      <div className="left">
        <ul>
          {
            this.props.goodsList.map(item=>{
              return(
                <li key={item.id}>
                  <p>商品名称：{item.name} </p>
                  <p>商品价格：{item.price} </p>
                  <button onClick={ this.props.shortCut.bind(null,item) }>-</button>
                  <button onClick={ this.props.addCar.bind(null,item) }>+</button>          
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default Goods;