import { CURRENCY_CHANGE } from './currencyActionTypes';


// eslint-disable-next-line import/prefer-default-export
export const currencyChange = currency => ({
    type: CURRENCY_CHANGE,
    currency,
});
