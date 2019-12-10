import { LOCALE_CHANGE } from './localeActionTypes';


// eslint-disable-next-line import/prefer-default-export
export const localeChange = locale => ({
    type: LOCALE_CHANGE,
    locale,
});
