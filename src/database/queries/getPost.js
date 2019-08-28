const dbconnection = require('../config/connection');

exports.getPosts = () => dbconnection.query('SELECT * FROM posts');
