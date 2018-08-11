import {AUTH_ERROR, AUTH_USER, FETCH_MESSAGE, UNAUTH_USER} from "../actions/types";

export default function(state={}, action) {
    switch (action.type) {
        case AUTH_USER:
            console.log('reducer - AUTH_USER: returning authenticated as true');
            return {...state, error: '', authenticated: true};
        case UNAUTH_USER:
            return {...state, authenticated: false};
        case AUTH_ERROR:
            console.log('inside reducer: payload=', action.payload);
            return {...state, error: action.payload.error};
        case FETCH_MESSAGE:
            return {...state, message: action.payload};
    }
    return state;
}