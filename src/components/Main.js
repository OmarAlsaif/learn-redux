import React from 'react';
import * as actionTypes from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Aux from '../hoc/Auxilliary';

const Main = () => {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: actionTypes.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: actionTypes.DECREMENT })
    }

    return ( 
        <Aux>
            <div className='wrapper'>
                <h1>{counter}</h1>
                <div className='buttonDiv'>
                    <button onClick={increment} size="lg">+</button>
                    <button onClick={decrement} size="lg">-</button>
                </div> 
            </div>
        </Aux>
     );
}
 
export default Main;