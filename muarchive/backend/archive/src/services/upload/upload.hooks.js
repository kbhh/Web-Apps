const { authenticate } = require('@feathersjs/authentication').hooks;
const dauria = require('dauria');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      hook => {
        if (!hook.data.uri && hook.params.file) {
          const file = hook.params.file;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          hook.data = {uri: uri};
        }
      }
    ],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [
      hook => {
      }
    ],
    update: [],
    patch: [
      hook => {
      }

    ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [
      hook => {
      }
    ],
    update: [],
    patch: [],
    remove: []
  }
};
