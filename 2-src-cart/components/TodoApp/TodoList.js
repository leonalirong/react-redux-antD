import React from 'react';

class TodoList extends React.Component{
  render(){
   // console.log(this.props)
    return(
      <ul>
        {
          this.props.todoList.map(item=>{
            return <li key={ item }>{ item }</li>
          })
        }
        
      </ul>
    )
  }
}
export default TodoList


