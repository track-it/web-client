function ProposalCtrl(ProposalService, CommentService, StorageService, UserService, TeamService, AppSettings, $state, $scope, proposal) {
  'ngInject';

  const config = AppSettings;
  const storage = StorageService;
  const vm = this;

  vm.proposal = proposal;
  vm.comments = [];
  vm.students = [];
  vm.title = proposal.title;
  vm.config = config;
  vm.user = window.user;
  vm.token = storage.get('api_token');
  vm.comment = {};
  vm.team = [];

  vm.getStudents = (index) => {
    return vm.students.filter(function (student) {
      if (vm.team[index] == student.id)
        return true;
      else
        return (student.id !== vm.user.id && vm.team.indexOf(student.id) == -1);
    });
  }

  vm.postComment = () => {
    CommentService.store('proposals', vm.proposal.id, vm.comment.body)
      .then(res => {
        vm.comments.push(res.data.data);
        vm.comment.body = '';
      });
  };

  vm.isCommentable = () => {
    return (vm.user && (proposal.author_id == vm.user.id || vm.user.role_id > config.PROJECT_ROLES.STUDENT));
  };

  vm.studentCanApply = () => {
    return (vm.user
      && vm.user.role_id == config.ROLES.STUDENT
      && !vm.team.users
      && vm.proposal.status == config.PROPOSAL_STATUSES.APPROVED);
  }

  vm.teacherCanApproveProposal = () => {
    return (vm.user
      && vm.user.role_id == config.ROLES.TEACHER
      && vm.proposal.status != config.PROPOSAL_STATUSES.APPROVED);
  }

  vm.teacherCanCreateProject = () => {
    return (vm.user
      && vm.user.role_id == config.ROLES.TEACHER
      && vm.proposal.status == config.PROPOSAL_STATUSES.APPROVED);
  }

  vm.memberCount = () => {
    let indices = [];
    for (var i = 0; i < vm.team.length + 1; i++) {
      indices.push(i);
    }
    return indices;
  }

  vm.memberSelected = (index) => {
    return vm.team[index] !== undefined;
  }

  vm.removeMember = (index) => {
    vm.team.splice(index, 1);
  }

  vm.orderByMe = (item) => {
    if (item.id == vm.user.id)
      return -1;
    else
      return 1;
  }

  vm.sendApplication = () => {
    TeamService.store(vm.proposal.id, {
      'user_ids': vm.team
    }).then(() => {
      $state.go($state.current, {}, {reload: true});
    });
  }

  if (vm.user) {
    CommentService.get('proposals', vm.proposal.id)
      .then(comments => {
        vm.comments = comments;
      });

    if (vm.user.role_id == config.ROLES.STUDENT) {
      UserService.index({'role': 'student'})
        .then(students => {
          vm.students = students;
        });

      TeamService.index(vm.proposal.id, {
        'user_id': vm.user.id
      }).then(teams => {
        if (teams.length == 1)
          vm.team = teams[0];
      });
    }
  }

}

export default {
  name: 'ProposalCtrl',
  fn: ProposalCtrl
};
