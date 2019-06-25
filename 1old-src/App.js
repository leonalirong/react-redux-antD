import React from 'react';
import store from './store'

export class One extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:store.getState().name
    } 
    store.subscribe(()=>{
      console.log(store.getState().name)
      this.setState({
        name:store.getState().name
      })
    })
  }

  render(){
    return(
      <div>
        <h2>我是One--{ this.state.name }</h2>
        <button onClick={ this.chgName }>点我修改为李四</button>
      </div>
    )
  }
  chgName(){
    let action={
      type:'SETNAME',
      value:'李四'
    }
    store.dispatch(action)
  }
}
export class Two extends React.Component{
  render(){
    return(
      <div>
         <h2>我是Two</h2>
      </div>
    )
  }
}

