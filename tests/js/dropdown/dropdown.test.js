
/* globals describe, it, assert, stribStylesDropdown */
// http://chaijs.com/api/assert/
'use strict';

// Make sure StribStyles is there
describe('stribStylesDropdown', function() {
  describe('general', function() {
    it('should exist', function() {
      assert.isDefined(stribStylesDropdown, 'stribStylesDropdown is not defined.');
    });
  });
});
