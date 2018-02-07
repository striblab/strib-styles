// Available from Jest
// https://facebook.github.io/jest/docs/en/api.html#content
// https://facebook.github.io/jest/docs/en/expect.html#content

// Implicit dependencies
/* global describe, it, expect */

// Dependenciest to test
import stribStylesDropdown from '../../source/js/dropdown.js';

// Test
describe('stribStylesDropdown', () => {
  it('should load', () => {
    // Add some HTML
    document.body.innerHTML = `<div>Hi world</div>`;

    // Test
    expect(stribStylesDropdown).toBeTruthy();
  });
});
