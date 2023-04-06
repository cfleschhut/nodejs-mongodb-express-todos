'use strict';

const getTodos = ({ store }) => {
  return async (req, res) => {
    const remainingTodos = await store.getRemainingTodos();

    res.json(remainingTodos);
  };
};

module.exports = { getTodos };
