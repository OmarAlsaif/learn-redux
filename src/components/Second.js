import React from 'react';
import { useSelector } from 'react-redux';

const Second = () => {
    const counter = useSelector((state) => state.counter)

    return (
        <h1>{counter}</h1>
    )
}
 
export default Second;