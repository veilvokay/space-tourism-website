export const getTabsToggles = (parentClass: string) => {
    const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(`.${parentClass} [data-toggle-tabs]`);
    return Array.from(tabs);
};

export const deactivateTabs = (tabsGroup: NodeListOf<HTMLElement>) => {
    tabsGroup.forEach(tab => tab.classList.remove('active'));
};

export default function createTabs(togglesParenClass: string, tabContentsClass: string) {
    const allGroups: NodeListOf<HTMLElement> = document.querySelectorAll(`.${tabContentsClass} [data-tabs-group]`);
    const tabToggles: HTMLElement[] = getTabsToggles(togglesParenClass);

    tabToggles.forEach(toggle => {
        toggle.addEventListener('click', e => {
            tabToggles.forEach(toggle => toggle.classList.remove('active'));
            deactivateTabs(allGroups);

            const toggle = e.target as HTMLElement;
            const groupID = toggle.dataset.toggleTabs;

            const activateThese: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-tabs-group="${groupID}"]`);
            toggle.classList.add('active');

            activateThese.forEach(element => element.classList.add('active'));
        });
    });
}

export const getTabContentByToggleTarget = (toggleTabsTarget: string): NodeListOf<HTMLElement> => {
    return document.querySelectorAll<HTMLElement>(`[data-tabs-group="${toggleTabsTarget}"]`);
};
