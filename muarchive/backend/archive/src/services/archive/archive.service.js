// Initializes the `archive` service on path `/archive`
const createService = require('feathers-mongoose');
const createModel = require('../../models/archive.model');
const hooks = require('./archive.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'archive',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/archive', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('archive');

  service.hooks(hooks);
};
