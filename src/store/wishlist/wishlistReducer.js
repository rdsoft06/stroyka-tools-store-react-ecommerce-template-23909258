import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishlistActionTypes';


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

export default function wishlistReducer(state = initialState, action) {
    switch (action.type) {
    case WISHLIST_ADD_ITEM:
        return addItem(state, action.product);

    case WISHLIST_REMOVE_ITEM:
        return state.filter(x => x.id !== action.productId);

    default:
        return state;
    }
}
