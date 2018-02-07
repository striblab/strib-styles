/**
 * Test for front-end app utils.js
 */

// Available from Jest
// https://facebook.github.io/jest/docs/en/api.html#content
// https://facebook.github.io/jest/docs/en/expect.html#content

// Implicit dependencies
/* global describe, it, expect */

// Dependenciest to test
import stribStyles from '../../source/js/all.js';

// Test
describe('stribStyles', () => {
  it('should load', () => {
    // Add some HTML
    document.body.innerHTML = `<div>Hi world</div>`;

    // Test
    expect(stribStyles).toBeTruthy();
  });
});
