'use strict';

const markTodoAsDone = ({ store }) => {
  return async (req, res) => {
    const { id } = req.params;

    try {
      await store.markTodoAsDone({ id });
    } catch {
      return res.status(404).end();
    }

    res.json({});
  };
};

module.exports = { markTodoAsDone };
