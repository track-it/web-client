'use strict';

describe('Unit: HomeCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller) => {
      ctrl = $controller('ProposalCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

});
