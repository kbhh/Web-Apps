// comment-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const comment = new Schema({
    userID: {type: String},
    comment: {type: String},
    userName: {type: String},
    email: {type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('comment', comment);
};
