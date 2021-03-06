const api = (endpoint) => {
  if (! endpoint) {
    return AppSettings.API_URL;
  }

  return AppSettings.API_URL + endpoint;
};

const AppSettings = {
  // constants
  APP_NAME: 'TrackIt',

  API_URL: 'https://trackit.albertkaaman.se:1234/',
  API_TOKEN: 'api_token',
  USER: 'user',

  USER_TYPES: {
    LOCAL:    1,
    ADFS:     2
  },

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

  ROLE_COLOR_IDS: {
    1: 'text-default',
    2: 'text-primary',
    3: 'text-warning',
    4: 'text-success',
    5: 'text-danger',
  },

  ROLE_ICON_IDS: {
    1: 'fa fa-user',
    2: 'fa fa-user',
    3: 'fa fa-graduation-cap',
    4: 'fa fa-university',
    5: 'fa fa-user-plus',
  },

  PROJECT_ROLES: {
    STAKEHOLDER:    1,
    STUDENT:        2,
    TEACHER:        3,
    SUPERVISOR:     4,
  },

  PROJECT_ROLE_IDS: {
    1:  'STAKEHOLDER',
    2:  'STUDENT',
    3:  'TEACHER',
    4:  'SUPERVISOR',
  },

  PROJECT_STATUSES: {
    UNCOMPLETED:    1,
    COMPLETED:      2,
    PUBLISHED:      3,
  },

  PROJECT_STATUS_IDS: {
    1:  'UNCOMPLETED',
    2:  'COMPLETED',
    3:  'PUBLISHED',
  },

  PROPOSAL_STATUSES: {
    NOT_REVIEWED:   1,
    UNDER_REVIEW:   2,
    NOT_APPROVED:   3,
    APPROVED:       4,
    ARCHIVED:       5,
  },

  PROPOSAL_STATUS_IDS: {
    1:  'NOT REVIEWED',
    2:  'UNDER REVIEW',
    3:  'NOT APPROVED',
    4:  'APPROVED',
    5:  'ARCHIVED',
  },

  CATEGORIES: {
    PROJECT:          1,
    BACHELOR:         2,
    MASTER:           3
  },

  CATEGORY_IDS: {
    1: 'PROJECT',
    2: 'BACHELOR',
    3: 'MASTER'
  },

  VALIDATION: {
    REGISTRATION: {
      // All normal characters
      USERNAME:     '^[a-zA-ZåäöÅÄÖ0-9]+$',

      // Must start with normal character, max 30 characters
      DISPLAYNAME:  '^[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´"]{1}[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´\\s-]*$',

      // Must contain one uppercase, one lowercase. Minimum 8 characters.
      PASSWORD:     '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
    },

    PROPOSAL: {
      TITLE:        '^[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´\\s]*$',
    },

  },

  VALIDATION: {
    REGISTRATION: {
      // All normal characters
      USERNAME:     '^[a-zA-ZåäöÅÄÖ0-9]+$',

      // Must start with normal character, max 30 characters
      DISPLAYNAME:  '^[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´"]{1}[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´\\s-]*$',

      // Must contain one uppercase, one lowercase. Minimum 8 characters.
      PASSWORD:     '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
    },

    PROPOSAL: {
      TITLE:        '^[a-zA-ZåäöÅÄÖ0-9!"#¤%&/()=?`´\\s]*$',
    },

  },

  // global helpers
  api: api,

  getRole: (role_id) => {
    return AppSettings.ROLE_IDS[role_id];
  },

  getProposalStatus: (status_id) => {
    return AppSettings.PROPOSAL_STATUS_IDS[status_id];
  },

  getProjectStatus: (status_id) => {
    return AppSettings.PROJECT_STATUS_IDS[status_id];
  },

  getProjectRole: (role_id) => {
    return AppSettings.PROJECT_ROLE_IDS[role_id];
  },

  getRoleIcon: (icon_id) => {
    return AppSettings.ROLE_ICON_IDS[icon_id];
  },

  getRoleColor: (color_id) => {
    return AppSettings.ROLE_COLOR_IDS[color_id];
  },

  getCategory: (category_id) => {
    return AppSettings.CATEGORY_IDS[category_id];
  }

};

export default AppSettings;
