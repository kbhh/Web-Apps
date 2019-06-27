// product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const product = new Schema({
    toEvent: {type: String},
    name: {type: String},
    owner: {type: String},
    ptype: {type: String},
    quality: {type: String},
    price: {type: Number},
    desc: {type: String},
    status: {type: Number, default: 0}, // 0 1 2
    image: {type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('product', product);
};
