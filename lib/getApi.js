'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getTodos } = require('./routes/getTodos');
const { noteTodo } = require('./routes/noteTodo');
const { markTodoAsDone } = require('./routes/markTodoAsDone');

const getApi = ({ store }) => {
  const api = express();

  api.use(cors());
  api.use(bodyParser.json());

  api.get('/todos', getTodos({ store }));

  api.post('/note-todo', noteTodo({ store }));

  api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }));

  return api;
};

module.exports = { getApi };
