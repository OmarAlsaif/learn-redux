import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../hoc/Auxilliary';

const Hidden = () => {
    const login = useSelector((state) => state.login.login);

    return ( 
        <Aux>
            <div className='wrapper'>
                {!login && <Redirect to='/' />}
                <h1>Hidden</h1>
            </div>
        </Aux>
     );
}
 
export default Hidden;