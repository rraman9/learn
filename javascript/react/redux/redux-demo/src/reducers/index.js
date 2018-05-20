const initialState = 0;
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1;
        default:
            return state;
    }
}
