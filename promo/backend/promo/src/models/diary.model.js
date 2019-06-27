// Diary-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const diary = new Schema({
    ownedBy: {type: String},
    createdOn: {type: Date, default: Date.now()},
    title: {type: String},
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('diary', diary);
};
