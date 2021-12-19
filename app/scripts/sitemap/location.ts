import { Pages } from './routes';

export default function location(enableSearch: boolean) {
    const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-link-js');
    const page = document.querySelector('main');
    const pageId = page.id;

    navLinks.forEach(link => {
        if (enableSearch) {
            link.classList.remove('active');

            if (link.dataset.id === pageId) {
                link.classList.add('active');

                if (!link.classList.contains('mobile-menu-item-link')) {
                    link.querySelector('.border').classList.add('js-border');
                }
            }
        }
    });
}

export function searchLocation(enableSearch: boolean) {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link-js');
    const currentPath = Pages.getCurrentPath();

    navLinks.forEach(link => {
        if (enableSearch) {
            link.classList.remove('active');

            if (link.pathname == currentPath) {
                link.classList.add('active');
            }
        }
    });
}
