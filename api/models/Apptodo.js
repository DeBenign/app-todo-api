/**
 * Apptodo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'todo',

  attributes: {

    title: {
      type: 'string',
      required: true,
      columnName: 'title',
    },

    body: {
      type: 'string',
      required: true,
      columnName: 'body',
    },
   
  },

};

