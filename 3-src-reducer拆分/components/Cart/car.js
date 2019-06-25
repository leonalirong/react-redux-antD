import React from 'react';

class Car extends React.Component{
  render(){
    return(
      <div className="right">
        <ul>
          {
            this.props.carList.map(item=>{
              return(
                <li key={item.id}>
                  <p>商品名称：{ item.name }</p>
                  <p>商品数量：{ item.num }</p>
                  <p>商品价格：{ item.price }</p>
                  <p>小计：{ item.total }</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default Car;