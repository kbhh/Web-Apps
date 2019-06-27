// account-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const account = new mongooseClient.Schema({
  
    email: {type: String, unique: true},
    password: { type: String },
    firstName: { type: String},
    lastName: { type: String},
    role: { type: String},
    gender: { type: String},
    regDate: { type: Date, default: Date.now()},
    approved: { type: Boolean, default: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('account', account);
};
