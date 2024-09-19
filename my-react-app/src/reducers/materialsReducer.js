/* eslint-disable import/no-anonymous-default-export */
export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_MATERIALS':
            return action.payload;
        default:
            return state;
    }
}