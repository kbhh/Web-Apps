// Task-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const task = new Schema({
    title: { type: String},
    upto: { type: Date},
    createdOn: { type: Date, default: Date.now()},
    owner: { type: String},
    text: { type: String, required: true }  }, {
    timestamps: true
  });

  return mongooseClient.model('task', task);
};
