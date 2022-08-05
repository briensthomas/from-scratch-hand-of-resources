const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /oatmealbar should return a list of ingredients', async () => {
    const res = await request(app).get('/oatmealbar');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      ingredient: expect.any(String),
      amount: expect.any(String)
    });
  });

  it('#GET /oatmealbar/:id should return a specific ingredient', async () => {
    const res = await request(app).get('/oatmealbar/3');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ingredient: expect.any(String),
      amount: expect.any(String)
    });
  });
  
  afterAll(() => {
    pool.end();
  });
});
