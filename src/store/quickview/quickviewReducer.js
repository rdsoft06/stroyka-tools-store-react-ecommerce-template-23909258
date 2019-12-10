import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN } from './quickviewActionTypes';


const initialState = {
    open: false,
    product: null,
};

export default function quickviewReducer(state = initialState, action) {
    let newState = state;

    if (action.type === QUICKVIEW_OPEN) {
        newState = {
            ...state,
            open: true,
            product: JSON.parse(JSON.stringify(action.product)),
        };
    } else if (action.type === QUICKVIEW_CLOSE) {
        newState = {
            ...state,
            open: false,
        };
    }

    return newState;
}
