'use strict'

module.exports = app => {
  // const checkLogin = app.middleware.checkLogin({});
  const { router, controller } = app;
  // router.post('/api/user/login', controller.api.user.login);
  router.post('/api/user/add', controller.users.add);
  router.get('/api/user/list', controller.users.list);
  router.get('/api/user/getUserInfo', controller.users.getUserInfo);
  router.get('/api/user/selectBySQL', controller.users.selectBySQL);
}