/**
 * Collect all JS parts
 */

import dropdown from './dropdown.js';
import gallery from './gallery.js';
import maps from './maps.js';
import pkg from '../../package.json';

export default {
  dropdown,
  gallery,
  maps,
  version: pkg.version
};
