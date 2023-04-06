'use strict';

const http = require('http');
const { flaschenpost } = require('flaschenpost');
const { processenv } = require('processenv');
const { getApi } = require('./lib/getApi');
const { InMemoryStore } = require('./lib/store/InMemoryStore');

(async () => {
  const logger = flaschenpost.getLogger();

  const store = new InMemoryStore();

  await store.initialize();

  const api = getApi({ store });
  const server = http.createServer(api);

  const port = processenv('PORT', 3000);

  server.listen(port, () => {
    logger.info('Server started', { port });
  });
})();
