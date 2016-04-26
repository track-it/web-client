const AppSettings = {
  // constants
  APP_NAME: 'TrackIt',

  API_URL: 'http://trackit.dev/',
  API_TOKEN: 'api_token',

  // global helpers
  api: (endpoint) => {
    return this.API_URL + endpoint;
  },
};

export default AppSettings;
