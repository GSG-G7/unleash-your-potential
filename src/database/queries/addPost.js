const dbconnection = require('../config/connection');

exports.addPost = (data, userId) => {
  const { title, description, content } = data;
  const d = new Date();
  const publishedAt = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
  return dbconnection.query({
    text: 'INSERT INTO posts (title, description, content, published_at, user_id) VALUES ($1, $2, $3, $4, $5);',
    values: [title, description, content, publishedAt, userId],
  });
};
