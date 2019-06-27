// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {type: String, unique: true},
    password: { type: String },
    profileImg: { type: String},
    firstName: {type: String},
    lastName: {type: String},
    role: {type: String}, // Top Manager /Service Seeker /Admin /Service Provider
    regID: {type: String},
    gender: {type: String},
    subRole: {type: String},
    step: {type: Number } // 0 1

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
