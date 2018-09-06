/**
 * Collect all JS parts
 */

import dropdown from './dropdown.js';
import gallery from './gallery.js';
import maps from './maps.js';
import styles from './styles.js';
import pkg from '../../package.json';

export default {
  dropdown,
  gallery,
  maps,
  styles,
  version: pkg.version
};
