const users = require('./users/users.service.js');
const diary = require('./diary/diary.service.js');
const task = require('./task/task.service.js');
const product = require('./product/product.service.js');
const event = require('./event/event.service.js');
const upload = require('./upload/upload.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(diary);
  app.configure(task);
  app.configure(product);
  app.configure(event);
  app.configure(upload);
};
 