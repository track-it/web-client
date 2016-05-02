/*global browser */

'use strict';

describe('E2E: Routes', function() {

  it('should have a working home route', function () {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should have a working proposals route', function () {
    browser.get('#/proposals');
    expect(browser.getLocationAbsUrl()).toMatch('/proposals');
  });

});
