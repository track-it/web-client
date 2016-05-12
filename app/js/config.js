const api = (endpoint) => {
  if (! endpoint) {
    return AppSettings.API_URL;
  }

  return AppSettings.API_URL + endpoint;
};

const AppSettings = {
  // constants
  APP_NAME: 'TrackIt',

  API_URL: 'http://trackit.dev/',
  API_TOKEN: 'api_token',

  ROLES: {
    GUEST:          1,
    CUSTOMER:       2,
    STUDENT:        3,
    TEACHER:        4,
    ADMINISTRATOR:  5,
  },

  ROLE_IDS: {
    1: 'GUEST',
    2: 'CUSTOMER',
    3: 'STUDENT',
    4: 'TEACHER',
    5: 'ADMINISTRATOR',
  },

  PROJECT_ROLES: {
    STAKEHOLDER:    1,
    STUDENT:        2,
    TEACHER:        3,
    SUPERVISOR:     4,
  },

  PROJECT_STATUSES: {
    NOT_COMPLETED:  1,
    COMPLETED:      2,
    PUBLISHED:      3,
  },

  PROJECT_STATUS_IDS: [
    'not completed',
    'completed',
    'published',
  ],

  PROPOSAL_STATUSES: {
    NOT_REVIEWED:   1,
    UNDER_REVIEW:   2,
    NOT_APPROVED:   3,
    APPROVED:       4,
    ARCHIVED:       5,
  },

  PROPOSAL_STATUS_IDS: [
    'not reviewed',
    'under review',
    'not approved',
    'approved',
    'archived',
  ],

  // global helpers
  api: api,

  getProposalStatus: (status_id) => {
    return AppSettings.PROPOSAL_STATUS_IDS[status_id - 1];
  },

  getProjectStatus: (status_id) => {
    return AppSettings.PROJECT_STATUS_IDS[status_id - 1];
  },

};

export default AppSettings;
