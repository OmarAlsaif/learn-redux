import React, { useState } from 'react';

import Aux from '../hoc/Auxilliary';

const Todo = (props) => {
    const [todoState, setTodoState] = useState('none');

    const completeTodoHandler = () => {
        if (todoState === 'none') {
            setTodoState('line-through')
        } else {
            setTodoState('none')
        }
    }

    return ( 
        <Aux>
            <div className="todoDiv">
                <h2 onClick={completeTodoHandler} style={{textDecoration: todoState}}>{props.todoData}</h2>
                <button className="deleteTodoBtn" >x</button>
            </div>
        </Aux>
     );
}
 
export default Todo;