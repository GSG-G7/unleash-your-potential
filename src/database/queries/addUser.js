const dbconnection = require('../config/connection');

exports.addUser = (data) => {
  const { username, email, hash } = data;
  return dbconnection.query({
    text: 'INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *;',
    values: [username, email, hash],
  });
};
