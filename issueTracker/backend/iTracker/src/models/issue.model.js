// issue-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const issue = new Schema({
    issueOwner: {type: String},
    issueOwnerName: {type: String},
    issueManager: {type: String},
    assignedTo: {type: String},
    issueTitle: {type: String},
    issueDesc: {type: String},
    status: {type: Number}, // 0 unasssignd 1 assigned 2 complted
    regDate: {type: Date, default: Date.now().toFixed()},
    issueType: {type: String},
    role: {type: String},
    issuePriority: {type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('issue', issue);
};
