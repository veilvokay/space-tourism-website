
// export const activateTab = (click: Event) => {
//     const tabID: string = click.target;
//     console.log(tabID);

// }

export const getTabsToggles = (parentClass: string) => {
    const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(`.${parentClass} [data-tabs-toggle]`);
    return Array.from(tabs);
};

export const deactivateTabs = (tabsGroup: NodeListOf<HTMLElement>) => {
    tabsGroup.forEach(tab => tab.classList.remove('active-tab'));
};

export default function createTabs(parentClass: string) {
    const allTabsGroup: NodeListOf<HTMLElement> = document.querySelectorAll('[data-tabs-group]');
    const tabsToggles: HTMLElement[] = getTabsToggles(parentClass);

    tabsToggles.forEach(toggle => {
        toggle.addEventListener('click', e => {
            deactivateTabs(allTabsGroup);

            const target = e.target as HTMLElement;
            const selectedGroupID = target.dataset.toggleGroup;

            console.log(selectedGroupID);


            const tabToggle = document.querySelector(`[data-toggle-group="${selectedGroupID}"]`);
            console.log(tabToggle);

            tabToggle.classList.add('active');

            const activateThese: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-tabs-group="${selectedGroupID}"]`);

            activateThese.forEach(element => element.classList.add('active-tab'));
        });
    });
}
