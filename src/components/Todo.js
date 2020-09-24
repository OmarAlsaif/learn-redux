import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actionTypes from '../actions/actions';

import Aux from '../hoc/Auxilliary';

const Todo = (props) => {
    const dispatch = useDispatch();
    const [todoState, setTodoState] = useState('');

    const completeTodoHandler = () => {
        if (todoState === '') {
            setTodoState('finishedTodo')
        } else {
            setTodoState('')
        }
    }

    const removeTodoHandler = () => {
        dispatch({
            type: actionTypes.REMOVE_TODO,
            payload: {
                id: props.id
            }
        })
    }

    return ( 
        <Aux>
            <div className="todoDiv">
                <h2 onClick={completeTodoHandler} className={todoState}>{props.data}</h2>
                <button className="deleteTodoBtn" onClick={removeTodoHandler} >x</button>
            </div>
        </Aux>
     );
}
 
export default Todo;