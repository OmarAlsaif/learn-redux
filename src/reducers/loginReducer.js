import * as actionTypes from '../actions/actions';

const initialState = {
    login: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                login: true
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}

export default reducer;