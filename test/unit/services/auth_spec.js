// 'use strict';

// describe('Unit: AuthService', () => {

//   let http;
//   let service;
//   let config;
//   let token = '445b2aaXhmRMgqcPl5pRmWPEsBD7t2vjX31XxmR6HanCe9blUIf5LIJpHryTRsloxyneG';

//   beforeEach(() => {
//     angular.mock.module('app');

//     angular.mock.inject(($httpBackend, AuthService, AppSettings) => {
//       http = $httpBackend;
//       service = AuthService;
//       config = AppSettings;
//     });
//   });

//   it('should exist', () => {
//     expect(service).toBeDefined();
//   });

//   it('should check if the user is authenticated', () => {
//     expect(service.isAuthenticated()).toEqual(false);
//   });

//   it('should send a request to the backend to validate the api token', (done) => {
//     http.expect('GET', config.api('auth/check')).respond(200, { authed: true });

//     service.check()
//       .then(() => {
//         expect(service.isAuthenticated()).toEqual(true);
//       })
//       .then(done);
//   });

//   it('should send a login request to the backend', (done) => {
//     http.expect('POST', config.api('auth')).respond(200, { success: true, token: token});

//     service.auth({username: 'ae2922', password: 'password'})
//       .then((res) => {
//         expect(res.data.success).toEqual(true);
//         expect(res.data.token).toEqual(token);
//       })
//       .then(done);
//   });
// });
