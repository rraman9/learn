import {CHANGE_AUTH} from "./types";

export function authenticate(isLoggedIn) {
    console.log('returning action payload:', isLoggedIn);
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}
