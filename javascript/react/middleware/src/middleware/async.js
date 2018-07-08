export default function ({dispatch}) {
    return next => action => {
        console.log(action);
        if (!action.payload || !action.payload.then) {
            next(action);
        }

        // Wait until promise resolves
        action.payload.then(response)
    };
}