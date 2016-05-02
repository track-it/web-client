'use strict';

describe('Unit: ProposalsCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module and mock proposals
    angular.mock.module('app', ($provide) => {
      $provide.service('proposals', () => {
        return [
          { id: 1, title: 'Example proposal #1' },
          { id: 2, title: 'Example proposal #2' }
        ];
      });
    });

    angular.mock.inject(($controller) => {
      ctrl = $controller('ProposalsCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a title set to "Proposals"', function() {
    expect(ctrl.title).toEqual('Proposals');
  });

  it('should have an array of proposals', function() {
    expect(ctrl.proposals.length).toEqual(2);
    expect(ctrl.proposals).toEqual([
      { id: 1, title: 'Example proposal #1' },
      { id: 2, title: 'Example proposal #2' }
    ]);
  });

});
