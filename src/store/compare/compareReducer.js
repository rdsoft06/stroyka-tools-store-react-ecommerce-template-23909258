import { COMPARE_ADD_ITEM, COMPARE_REMOVE_ITEM } from './compareActionTypes';


function addItem(state, product) {
    const itemIndex = state.findIndex(x => x.id === product.id);

    if (itemIndex === -1) {
        return [
            ...state,
            JSON.parse(JSON.stringify(product)),
        ];
    }

    return state;
}

const initialState = [];

export default function compareReducer(state = initialState, action) {
    switch (action.type) {
    case COMPARE_ADD_ITEM:
        return addItem(state, action.product);

    case COMPARE_REMOVE_ITEM:
        return state.filter(x => x.id !== action.productId);

    default:
        return state;
    }
}
