process.env.NODE_ENV = 'test';
const connection = require('../../db/connection');
const { expect } = require('chai');
const { topics } = require('./api');

describe('users', () => {
 beforeEach(() => connection.seed.run());
 after(() => connection.destroy());
 describe('test the topics query', () => {
  it('returns all the topics ', async () => {
   const expectedResult = {
    data: {
     topics: [
      {
       slug: "football"
      },
      {
       slug: "cooking"
      },
      {
       slug: "coding"
      }
     ]
    },
   };

   const result = await topics();

   expect(result.data).to.eql(expectedResult);
  });
 });
});