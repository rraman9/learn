import {FETCH_USERS} from "./types";
import axios from 'axios';

export function fetchUsers() {
    console.log('action - returning hardcoded users');
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USERS,
        payload: request
    };
}