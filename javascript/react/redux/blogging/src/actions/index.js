import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=asdhf104yrhkjesf';
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    console.log('getting url:' + url);
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.delete(url).then (() => callback());
    return {
        type: DELETE_POST,
        payload: id
    };
}