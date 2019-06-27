// Initializes the `upload` service on path `/upload`
//const createService = require('feathers-mongoose');
const createModel = require('../../models/upload.model');
const hooks = require('./upload.hooks');
const multer = require('multer');


const multipartMiddleware = multer();

const blobService  = require('feathers-blob');

const fs = require('fs-blob-store');
const blobStorage = fs('./uploads');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  
   
  const options = {
    name: 'upload',
    Model: blobStorage,
    paginate
  };
  // Initialize our service with any options it requires
  app.use('/upload', 
    multipartMiddleware.single('uri'),
    (req,res,next) => {
      req.feathers.file = req.file;
      next();
    },  
    blobService(options)
  );

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload');

  service.hooks(hooks);
};
