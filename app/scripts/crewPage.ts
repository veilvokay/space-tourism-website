import 'styles/base';
import 'styles/crewPage/index';
import runPage from './models/commonPage';
import createTabs, { setActiveTabByDefault } from './models/tabs';


runPage();

createTabs('crew-names', 'crew-tab-contents');
setActiveTabByDefault('douglas');
