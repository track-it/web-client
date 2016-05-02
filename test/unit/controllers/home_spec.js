'use strict';

describe('Unit: HomeCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller) => {
      ctrl = $controller('HomeCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a title set to TrackIt', function() {
    expect(ctrl.title).toEqual('TrackIt');
  });

});
