import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import Cart from './components/Cart'

ReactDOM.render(
  <div>
    <TodoApp />
    <hr/>
    <Cart />
  </div> ,
  document.getElementById('root')
)