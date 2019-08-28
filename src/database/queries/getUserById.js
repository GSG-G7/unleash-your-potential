const dbconnection = require('../config/connection');

exports.getUserById = (data) => {
  const { id } = data;
  return dbconnection.query({
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id],
  });
};
