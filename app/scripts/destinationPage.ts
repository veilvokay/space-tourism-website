import 'styles/base';
import 'styles/destinationPage/index';
import runPage from './models/commonPage';
import createTabs, { setActiveTabByDefault } from './models/tabs';


runPage();

createTabs('planet-names', 'planet-tab-contents');
setActiveTabByDefault('moon');

