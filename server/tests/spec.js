process.env.NODE_ENV = 'test';
const connection = require('../../db/connection');
const { expect } = require('chai');
const { topics } = require('./api');

describe('users', () => {
 beforeEach(() => connection.seed.run());
 after(() => connection.destroy());
 describe('getUser(username:"grumpy19): User', () => {
  it('returns a user when user can be found', async () => {
   const expectedResult = {
    data: {
     getUser: {
      username: "grumpy19",
      name: "Paul Grump",
     },
    },
   };

   const result = await topics();

   expect(result.data).to.eql(expectedResult);
  });
 });
});