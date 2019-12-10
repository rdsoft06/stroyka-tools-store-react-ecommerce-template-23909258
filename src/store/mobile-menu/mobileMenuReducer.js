import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from './mobileMenuActionTypes';


const initialState = {
    open: false,
};

export default function mobileMenuReducer(state = initialState, action) {
    switch (action.type) {
    case MOBILE_MENU_OPEN:
        return {
            ...state,
            open: true,
        };
    case MOBILE_MENU_CLOSE:
        return {
            ...state,
            open: false,
        };
    default:
        return state;
    }
}
