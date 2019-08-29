const dbconnection = require('../config/connection');

exports.addPost = (data, userId) => {
  const { title, description, content } = data;
  const date = new Date();
  const publishedAt = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
  return dbconnection.query({
    text: 'INSERT INTO posts (title, description, content, published_at, user_id) VALUES ($1, $2, $3, $4, $5);',
    values: [title, description, content, publishedAt, userId],
  });
};
