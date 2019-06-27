const users = require('./users/users.service.js');
const issue = require('./issue/issue.service.js');
const upload = require('./upload/upload.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(upload);
  app.configure(issue);
};
