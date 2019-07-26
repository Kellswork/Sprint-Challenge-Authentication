const db = require('../database/dbConfig');

module.exports = {
    insert, findUser
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
