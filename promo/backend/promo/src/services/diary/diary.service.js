// Initializes the `Diary` service on path `/diary`
const createService = require('feathers-mongoose');
const createModel = require('../../models/diary.model');
const hooks = require('./diary.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'diary',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/diary', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('diary');

  service.hooks(hooks);
};
