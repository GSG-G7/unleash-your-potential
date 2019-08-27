const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl = '';
switch(process.env.NODE_ENV){
    case 'test' : dbUrl = process.env.TEST_DB;break;
    case undefined : throw new Error('No Database URL!!!');
    default : dbUrl = process.env.DATABASE_URL;
}

const options = {
    connectionString: dbUrl,
    ssl: true
}

module.exports = new Pool(options)