const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /donuts should return a list of donuts', async () => {
    const res = await request(app).get('/donuts');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      ingredients: expect.any(String)
    });
  });

  
  afterAll(() => {
    pool.end();
  });
});
