//Finsweet attributes
import { linkblockedit } from '@finsweet/attributes-linkblockedit/';
import { scrollDisable } from '@finsweet/attributes-scrolldisable/';

//Modal
import { modal } from '$modal/modal';

//Nest
import { nestedElement } from './nest/nestElement';

//Utils
import { swipers } from '$utils/swipers';
import { socialShare } from '$utils/social-share';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestedElement();
  linkblockedit();
  scrollDisable();
  socialShare();
  modal();
  swipers();
});
