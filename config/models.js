const db = require('../database/dbConfig');

module.exports = {
  insert,
  findUsername
};

function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => findUser(ids[0]));
}

function findUser(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findUsername(username) {
  return db('users').where({ username });
}
