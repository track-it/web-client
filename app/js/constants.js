const api = (endpoint) => {
  return AppSettings.API_URL + endpoint;
};

const AppSettings = {
  // constants
  APP_NAME: 'TrackIt',

  API_URL: 'http://trackit.dev/',
  API_TOKEN: 'api_token',

  // global helpers
  api: api,
};

export default AppSettings;
