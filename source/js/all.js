/**
 * Collect all JS parts
 */

import dropdown from './dropdown.js';
import gallery from './gallery.js';
import pkg from '../../package.json';

export default {
  dropdown,
  gallery,
  version: pkg.version
};
