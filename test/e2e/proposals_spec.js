/*global browser, by */

'use strict';

describe('E2E: Proposals', function() {

  beforeEach(function() {
    browser.get('#/proposals');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/proposals');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.page-title'));
    expect(element.getText()).toEqual('Proposals');
  });

});
