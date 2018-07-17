export default function ({dispatch}) {
    return next => action => {
        console.log(action);
        if (!action.payload || !action.payload.then) {
            next(action);
        }

        // Wait until promise resolves
        /*action.payload.then(function(response) {
            const newAction = {...action, payload: response};
            dispatch(newAction);
        });*/
        action.payload.then(value => {
            const newAction = {...action, payload: value};
            dispatch(newAction);
            //return dispatch(newAction);
        })
    };
}