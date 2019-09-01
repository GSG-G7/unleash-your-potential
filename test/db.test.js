const test = require('tape');

const { dbBuild } = require('../src/database/config/build');
const { addPost, getUser, getPosts, addUser } = require('../src/database/queries');

const d = new Date();
const publishedAt = d.getDate() +' / '+ (d.getMonth()+1)+' / ' +d.getFullYear() ;

exports.addPostTest = test('test add post to database', t => {
  const user = { username: 'mohamm', email: 'mohamm@ghj.cn', hash: '123ghj' };
  const data = { title:' mohammad', description:' mohammad hammada', content: ' mohammad hammada henak' };
  const expected = {
    id: 1,
    title: ' mohammad',
    description: ' mohammad hammada',
    content: ' mohammad hammada henak',
    published_at: '1 / 9 / 2019',
    user_id: 1,
    user_name: 'mohamm',
    password: '123ghj',
    email: 'mohamm@ghj.cn'
  }
      dbBuild()
    .then(() => addUser(user))
    .then(() => addPost(data, 1))
    .then(() => getPosts())
    .then(posts => t.deepEquals(posts.rows[0],expected, 'should be inserted'))
    .then(() => t.end())
    .catch(err => {
      t.error(err);
      t.end();
    })
});
exports.addUserTest = test('test add user to database', t => {
  const user = { username: 'mohamm', email: 'mohamm@ghj.cn', hash: '123ghj' };
  const expected =    {
    id: 1,
    user_name: 'mohamm',
    password: '123ghj',
    email: 'mohamm@ghj.cn'
  };
      dbBuild()
    .then(() => addUser(user))
    .then(() => getUser({email: 'mohamm@ghj.cn', password: '123ghj'}))
  
    .then(users => t.deepEquals(users.rows[0],expected, 'should user inserted'))
    .then(() => t.end())
    .catch(err => {
      t.error(err);
      t.end();
    })
  });
