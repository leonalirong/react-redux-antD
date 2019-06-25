import React from 'react';

class InputBlock extends React.Component{
  render(){
    return(
      <div>
        <input 
        type="text" 
        value={ this.props.inputVal } 
        onChange={ this.props.onChange }/>
        <button 
        onClick={ this.props.onClick }>ADD</button>
      </div>
    )
  }
}
export default InputBlock


