'use strict';

describe('Unit: ProposalCtrl', function() {

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

  it('should have a title set to "Proposals"', function() {
    expect(ctrl.title).toEqual('Proposals');
  });

});
