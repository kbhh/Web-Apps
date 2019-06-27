// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
   
    firstName: {type: String},
    lastName: {type: String},
    orgName: {type: String},
    tinNumber: {type: String, unique: true},
    role: {type: String, default: 'user'},
    email: {type: String, unique: true},
    password: { type: String },
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
    