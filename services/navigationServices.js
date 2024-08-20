import {headerMenus, footerMenus} from "../fakedb/navigation-menu";

export const navigationServices = {
    getMenus : (type = 'header') => {
        return type === 'header' ? headerMenus : footerMenus;
    }
}