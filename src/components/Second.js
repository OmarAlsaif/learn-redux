import React from 'react';
import { useSelector } from 'react-redux';

import Aux from '../hoc/Auxilliary';

const Second = () => {
    const counter = useSelector((state) => state.counter.counter)

    return (
        <Aux>
            <div className='wrapper'>
                <h1>Second</h1>
                <h1>{counter}</h1>
            </div> 
        </Aux>
    )
}
 
export default Second;