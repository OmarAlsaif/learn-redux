import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../actions/actions';


const AddTodo = () => {
    const [data, setData] = useState({
        todo: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.persist();
        setData(prev => ({...prev, todo: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.todo) {
            dispatch({
                type: actionTypes.ADD_TODO,
                payload: {
                    todo: data.todo
                }
            });
            setData({todo: ''});
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name={"todo"} value={data.todo} />
            <input type="submit" />
        </form>
     );
}
 
export default AddTodo;