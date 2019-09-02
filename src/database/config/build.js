const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

exports.dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'database.sql')).toString();
  return connection.query(sql);
};
