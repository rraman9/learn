import { INCREMENT_COUNT } from '../constants/actionTypes';

function incrementCount() {
    return {
        type: INCREMENT_COUNT,
    };
}

export { incrementCount };
