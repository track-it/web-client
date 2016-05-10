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
    CUSTOMER:       1,
    STUDENT:        2,
    TEACHER:        3,
    ADMINISTRATOR:  4,
  },

  ROLE_IDS: {
    1:              'CUSTOMER',
    2:              'STUDENT',
    3:              'TEACHER',
    4:              'ADMINISTRATOR',
  },

  PROPOSAL_STATUS_IDS: [
    'not reviewed',  
    'under review',
    'not approved', 
    'approved',
  ],

  PROJECT_STATUS_IDS: [
    'completed',
    'not completed',
    'published',
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
