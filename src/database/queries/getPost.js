const dbconnection = require('../config/connection');

exports.getPosts = () => dbconnection
.query('SELECT * FROM posts join users on users.id = posts.user_id');
