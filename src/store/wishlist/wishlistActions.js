import { toast } from 'react-toastify';
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from './wishlistActionTypes';


export function wishlistAddItemSuccess(product) {
    toast.success(`Product "${product.name}" added to wish list!`);

    return {
        type: WISHLIST_ADD_ITEM,
        product,
    };
}

export function wishlistRemoveItemSuccess(productId) {
    return {
        type: WISHLIST_REMOVE_ITEM,
        productId,
    };
}

export function wishlistAddItem(product) {
    // sending request to server, timeout is used as a stub
    return dispatch => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(wishlistAddItemSuccess(product));
                resolve();
            }, 2000);
        })
    );
}

export function wishlistRemoveItem(productId) {
    // sending request to server, timeout is used as a stub
    return dispatch => (
        new Promise((resolve) => {
            setTimeout(() => {
                dispatch(wishlistRemoveItemSuccess(productId));
                resolve();
            }, 2000);
        })
    );
}
