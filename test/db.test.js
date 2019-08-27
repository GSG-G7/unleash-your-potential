const test = require('tape');

const initalTest = test('inital test', t => {
    t.equal(2, 2, "should be equal");
    t.end();
})

module.exports = { initalTest };