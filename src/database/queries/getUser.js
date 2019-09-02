const dbconnection = require('../config/connection');

exports.getUser = (data) => {
  const { email } = data;
  return dbconnection.query({
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  });
};
