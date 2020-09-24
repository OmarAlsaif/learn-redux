import * as actionTypes from '../actions/actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = []

const todoReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case actionTypes.ADD_TODO:
            return [...state, {
                    id: uuidv4(),
                    todo: payload.todo
            }]
        default:
            return state
    }
}

export default todoReducer;