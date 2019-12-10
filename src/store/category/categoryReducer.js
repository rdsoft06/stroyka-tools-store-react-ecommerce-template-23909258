import { CATEGORY_GET } from './categoryActionTypes';

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case CATEGORY_GET:
            return action.payload
        default:
            return state;
    }
}
