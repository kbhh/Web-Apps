const assert = require('assert');
const app = require('../../src/app');

describe('\'archive\' service', () => {
  it('registered the service', () => {
    const service = app.service('archive');

    assert.ok(service, 'Registered the service');
  });
});
