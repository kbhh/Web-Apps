// Event-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const event = new Schema({
    name: { type: String, required: true },
    image: { type: String},
    place: { type: String},
    organizer: { type: String},
    desc: { type: String},
    startsOn: { type: Date, required: true},
    endsOn: { type: Date}
  }, {
    timestamps: true
  });

  return mongooseClient.model('event', event);
};
