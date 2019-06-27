// archive-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const archive = new Schema({
    title: {type: String},
    fileName: {type: String},
    dataType: { type: String},
    archiveType: { type: String},
    region: {type: String},
    wereda: {type: String},
    specificPlace: {type: String }, 
    author: {type: String},
    accessibility: { type: String},
    regDate: {type: Date, default: Date.now()},
    age: {type: Number},
    blockNumber: {type: String},
    shelfNumber: {type: String},
    desc: {type: String}
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('archive', archive);
};
