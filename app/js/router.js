const home = {
  url: '/',
  controller: 'HomeCtrl as homeCtrl',
  templateUrl: 'home.html',
  title: 'Home'
};

const proposals = {
  url: '/proposals',
  controller: 'ProposalCtrl as proposalCtrl',
  templateUrl: 'proposals/index.html',
  title: 'Proposals',
  resolve: {
    proposals: function (ProposalService) {
      return ProposalService.index();
    }
  }
};

const showProposal = {
  url: '/proposals/:id',
  controller: 'ProposalCtrl as proposalCtrl',
  templateUrl: 'proposals/show.html',
  title: 'Proposal',
  resolve: {
    proposals: function (ProposalService, $stateParams) {
      return ProposalService.get($stateParams.id);
    }
  }
};

export default function ($stateProvider) {
  $stateProvider
    .state('home', home)
    .state('proposals', proposals)
    .state('showProposal', showProposal);
};
