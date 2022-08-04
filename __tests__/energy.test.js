const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /energy should display a list of all energy drink objects', async () => {
    const res = await request(app).get('/energy');
    expect(res.body.length).toBe(5);
    expect(res.body[3]).toEqual({
      id: expect.any(String),
      name: 'Monster Energy Drink',
      flavor:  'Gronkster',
      rating: 10
    });
  });
  afterAll(() => {
    pool.end();
  });
});
