const test = require('tape');

const { dbBuild } = require('../src/database/config/build');
const { addPost, getUser, getPosts, addUser } = require('../src/database/queries');


exports.addPostTest = test('test add post to database', t => {
    const user = { username: 'mohamm', email: 'mohamm@ghj.cn', password: '123ghj' };
    const data = { title:' mohammad', description:' mohammad hammada', content: ' mohammad hammada henak' };
    const expected = {
        id: 1,
        title: ' mohammad',
        description: ' mohammad hammada',
        content: ' mohammad hammada henak',
        published_at: '2 / 7 / 2019',
        user_id: 1
      }
       dbBuild()
      .then(() => addUser(user))
      .then(() => addPost(data, 1))
      .then(() => getPosts())
      .then(posts => t.deepEquals(posts.rows[0],expected, 'should be inserted'))
      .then(() => t.end())
      .catch(err => t.error(err))

      
      
    });
