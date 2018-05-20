function createStore(reducer, initialState) {
    let state = initialState;
    const subscribers = [];
    function getState() {
        return state;
    }
    function subscribe(cb) {
        subscribers.push(cb);
    }
    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach((sub) => {
            sub();
        });
    }
    return {
        getState,
        subscribe,
        dispatch,
    };
}
const reducer = require('../reducers/index');

const store = createStore(reducer, 0);
console.log(store.getState());
store.subscribe(() => {
    console.log(`Current state: ${store.getState()}`);
});
store.dispatch({ type: 'INCREMENT_COUNT' });
store.dispatch({ type: 'INCREMENT_COUNT' });