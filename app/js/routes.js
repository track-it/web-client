const home = {
  url: '/',
  controller: 'HomeCtrl as homeCtrl',
  templateUrl: 'home.html',
  title: 'Home'
};

const login = {
  guest: true,

  url: '/login',
  controller: 'LoginCtrl as loginCtrl',
  templateUrl: 'auth/login.html',
  title: 'Login'
};

const register = {
  guest: true,

  url: '/register',
  controller: 'RegisterCtrl as registerCtrl',
  templateUrl: 'auth/register.html',
  title: 'Register'
};

const adfsLogin = {
  guest: true,

  url: '/adfs/login?:api_token',
  controller: 'AdfsLoginCtrl as adfsLoginCtrl',
  resolve: {
    me: ['AuthService', '$stateParams', function (AuthService, $stateParams) {
      return AuthService.initialize($stateParams.api_token);
    }]
  }
}

const adfsLogout = {
  guest: true,

  url: '/adfs/logout',
  controller: 'AdfsLogoutCtrl as adfsLogoutCtrl'
}

const account = {
  url: '/account',
  controller: 'AccountCtrl as accountCtrl',
  templateUrl: 'account.html',
  title: 'Account',
  resolve: {
    me: ['AccountService', function (AccountService) {
      return AccountService.me();
    }]
  }
};

const proposals = {
  url: '/proposals',
  controller: 'ProposalsCtrl as proposalCtrl',
  templateUrl: 'proposals/index.html',
  title: 'Proposals',
  resolve: {
    proposals: ['ProposalService', function (ProposalService) {
      return ProposalService.index();
    }]
  }
};

const showProposal = {
  url: '/proposals/:id',
  controller: 'ProposalCtrl as proposalCtrl',
  templateUrl: 'proposals/show.html',
  title: 'Proposal',
  resolve: {
    proposal: ['ProposalService', '$stateParams', function (ProposalService, $stateParams) {
      return ProposalService.get($stateParams.id);
    }]
  }
};

const createProposal = {
  authenticate: false, //true,

  url: '/proposals/create',
  controller: 'CreateProposalCtrl as proposalCtrl',
  templateUrl: 'proposals/create.html',
  title: 'Submit proposal'
};

const editProposal = {
  authenticate: false, //true,

  url: '/proposals/:id/edit',
  controller: 'EditProposalCtrl as proposalCtrl',
  templateUrl: 'proposals/edit.html',
  title: 'Edit proposal',
  resolve: {
    proposal: ['ProposalService', '$stateParams', function (ProposalService, $stateParams) {
      return ProposalService.get($stateParams.id);
    }]
  }
};

const projects = {
  url: '/projects',
  controller: 'ProjectsCtrl as projectCtrl',
  templateUrl: 'projects/index.html',
  title: 'Projects',
  resolve: {
    projects: ['ProjectService', function (ProjectService) {
      return ProjectService.index();
    }]
  }
};

const showProject = {
  url: '/projects/:id',
  controller: 'ProjectCtrl as projectCtrl',
  templateUrl: 'projects/show.html',
  title: 'Project',
  resolve: {
    project: ['ProjectService', '$stateParams', function (ProjectService, $stateParams) {
      return ProjectService.get($stateParams.id);
    }]
  }
};

const createProject = {
  authenticate: false, //true,
  url: '/proposals/:id/project',
  controller: 'CreateProjectCtrl as projectCtrl',
  templateUrl: 'projects/create.html',
  title: 'Submit proposal',
  resolve: {
    proposal: ['ProposalService', '$stateParams', function (ProposalService, $stateParams) {
      return ProposalService.get($stateParams.id);
    }],
    teams: ['TeamService', '$stateParams', function (TeamService, $stateParams) {
      return TeamService.index($stateParams.id);
    }]
  }
};

const editProject = {
  authenticate: false, //true,

  url: '/projects/:id/edit',
  controller: 'EditProjectCtrl as projectCtrl',
  templateUrl: 'projects/edit.html',
  title: 'Edit project',
  resolve: {
    project: ['ProjectService', '$stateParams', function (ProjectService, $stateParams) {
      return ProjectService.get($stateParams.id);
    }]
  }
};

export default {
  setup: function ($stateProvider) {
    $stateProvider
      .state('home', home)
      .state('login', login)
      .state('register', register)
      .state('adfsLogin', adfsLogin)
      .state('adfsLogout', adfsLogout)
      .state('account', account)
      .state('proposals', proposals)
      .state('createProposal', createProposal)
      .state('showProposal', showProposal)
      .state('editProposal', editProposal)
      .state('projects', projects)
      .state('showProject', showProject)
      .state('createProject', createProject)
      .state('editProject', editProject);
  }
};
