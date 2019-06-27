const account = require('./account/account.service.js');
const archive = require('./archive/archive.service.js');
const upload = require('./upload/upload.service.js');
const comment = require('./comment/comment.service.js');
module.exports = function (app) {
  app.configure(account);
  app.configure(archive);
  app.configure(upload);
  app.configure(comment);
};
