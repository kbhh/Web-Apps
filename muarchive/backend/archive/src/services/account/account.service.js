// Initializes the `account` service on path `/account`
const createService = require('feathers-mongoose');
const createModel = require('../../models/account.model');
const hooks = require('./account.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'account',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/account', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('account');

  service.hooks(hooks);
};
