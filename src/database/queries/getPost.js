const dbconnection = require('../config/connection');

exports.getPosts = () => {
    return dbconnection.query('SELECT * FROM posts');
}