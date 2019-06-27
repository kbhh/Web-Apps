const assert = require('assert');
const app = require('../../src/app');

describe('\'Diary\' service', () => {
  it('registered the service', () => {
    const service = app.service('diary');

    assert.ok(service, 'Registered the service');
  });
});
