import { Template } from 'meteor/templating';

import 'foundation-sites/dist/foundation.js';

import './index.html';

Template.body.onRendered(() => {
  $(document).foundation();
});
