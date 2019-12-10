import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from './mobileMenuActionTypes';


export function mobileMenuOpen() {
    return { type: MOBILE_MENU_OPEN };
}

export function mobileMenuClose() {
    return { type: MOBILE_MENU_CLOSE };
}
