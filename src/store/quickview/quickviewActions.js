import products from '../../data/shopProducts';
import { QUICKVIEW_CLOSE, QUICKVIEW_OPEN } from './quickviewActionTypes';


export function quickviewOpenSuccess(product) {
    return {
        type: QUICKVIEW_OPEN,
        product,
    };
}

export function quickviewClose() {
    return {
        type: QUICKVIEW_CLOSE,
    };
}

export function quickviewOpen(productId) {
    // sending request to server, timeout is used as a stub
    return dispatch => (
        new Promise((resolve) => {
            setTimeout(() => {
                const product = products.find(x => x.id === productId);

                if (product) {
                    dispatch(quickviewOpenSuccess(product));
                }

                resolve();
            }, 2000);
        })
    );
}
