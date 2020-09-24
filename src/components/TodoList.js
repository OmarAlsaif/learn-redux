import React from 'react';
import { useSelector } from 'react-redux';

import Aux from '../hoc/Auxilliary';
import Todo from './Todo';


const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    return ( 
        <Aux>
            {todos.length !== 0 ? todos.map(todo => <Todo key={todo.id} data={todo.todo} id={todo.id} />) : <h1>Add a todo</h1>}
        </Aux>
     );
}
 
export default TodoList;