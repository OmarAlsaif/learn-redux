import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, islogged} from './actions/actions.js'

function App() {
  const counterReducer = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.login)
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter {counterReducer}</h1>
      <button className='counterButton' onClick={() => dispatch(increment())}>+</button>
      <button className='counterButton' onClick={() => dispatch(decrement())}>-</button>


      <button onClick={() => dispatch(islogged())}>{isLogged ? 'log out' : 'log in'}</button>
      {isLogged ? <h3>Show ONLY if logged in </h3> : <h3>Nothing to see here</h3>}
    </div>
  );
}

export default App;
