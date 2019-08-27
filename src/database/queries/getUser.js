const dbconnection = require('../config/connection');

exports.getUser = (data) => {
    const { email, password } = data
    return dbconnection.query({
          text: 'SELECT * FROM users WHERE password = $1 and email = $2',
          values: [email, password]
    });
}