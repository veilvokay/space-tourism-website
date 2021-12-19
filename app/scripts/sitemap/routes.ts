import { getEnumKeyByEnumValue } from 'app/utils/enumHelpers';

export enum Pages {
    homePage = <any>'/',
    crewPage = <any>'/crew-page.html',
}

export namespace Pages {
    // const AllKeys
    // const AllValues

    export function getPage(value: string) {
        return getEnumKeyByEnumValue(Pages, value);
    }

    export function getCurrentPath() {
        return window.location.pathname;
    }
}

