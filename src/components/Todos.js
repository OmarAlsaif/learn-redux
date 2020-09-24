import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../hoc/Auxilliary';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
    const login = useSelector((state) => state.login.login);

    return ( 
        <Aux>
            <div className='wrapper'>
                {!login && <Redirect to='/' />}
                <h1>Todos</h1>
                <AddTodo />
                <TodoList />
            </div>
        </Aux>
     );
}
 
export default Todos;