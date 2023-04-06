'use strict';

const crypto = require('crypto');

const createTodo = ({ description }) => {
  return {
    id: crypto.randomUUID(),
    description,
    status: 'open',
  };
};

module.exports = { createTodo };
