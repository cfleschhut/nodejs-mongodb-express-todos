'use strict';

const { createTodo } = require('../createTodo');

const noteTodo = ({ store }) => {
  return async (req, res) => {
    const { description } = req.body;
    const todo = createTodo({ description });

    store.noteTodo({ todo });

    res.json({ id: todo.id });
  };
};

module.exports = { noteTodo };
