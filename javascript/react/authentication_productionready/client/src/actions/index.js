import {AUTH_ERROR, AUTH_USER, CHANGE_AUTH, UNAUTH_USER} from "./types";
import axios from 'axios';
import history from "../history";

const ROOT_URL = 'http://localhost:3090';
export function signInUser(email, password) {
    console.log('from inside signing function: email=', email, ', password=', password);
    return function(dispatch) {
        // Submit to server
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                // update state to authenticated
                console.log('response is good, pushing history:', response);
                dispatch({type: AUTH_USER});
                // Save JWT token
                localStorage.setItem('token', response.data.token);
                // redirect to route /feature
                history.push('/resources');
            })
            .catch(() => {
                // Show an error to user
                dispatch(authError('Bad login info'));
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}