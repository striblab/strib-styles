
/* globals describe, it, assert, stribStyles */
// http://chaijs.com/api/assert/
'use strict';

// Make sure StribStyles is there
describe('stribStyles', function() {
  describe('general', function() {
    it('should be an object', function() {
      assert.isObject(stribStyles, 'stribStyles is not an object.');
    });
  });
});
