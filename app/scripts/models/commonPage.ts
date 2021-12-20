import location, { searchLocation } from '../sitemap/location';

export default function runPage() {
    document.body.classList.remove('preload');
    // location(true);
    searchLocation(true);


}
