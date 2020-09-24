import React from 'react';
import './App.css';
import Main from './components/Main';
import Second from './components/Second';
import Third from './components/Third';
import Todos from './components/Todos';
import Aux from './hoc/Auxilliary';
import * as actionTypes from './actions/actions';

import { useSelector, useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);

  const loginHandler = () => {
    dispatch({
      type: actionTypes.LOGIN
    })
  }

  const logoutHandler = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }

  return (
    <Aux>
      <Router>
        <div className="head">
          <div className="links">
            <Link to='/'>Main</Link>
            <Link to='/second'>Second</Link>
            <Link to='/third'>Third</Link>
            {login && <Link to='/todos'>Todos</Link> }
          </div>
          <div>
            {!login ? <button onClick={loginHandler}>Log in</button> : <button onClick={logoutHandler}>Log out</button>}
          </div>
        </div>
      
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
          <Route path="/third">
            <Third />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
      </Router>
    </Aux>
  );
}

export default App;
