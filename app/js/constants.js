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

  // global helpers
  api: api,
};

export default AppSettings;
