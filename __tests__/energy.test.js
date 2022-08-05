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
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(5);
    expect(res.body[3]).toEqual({
      id: expect.any(String),
      name: 'Monster Energy Drink',
      flavor:  'Gronkster',
      rating: 10
    });
  });

  it('#GET /energy/:id should display information for one energy drink', async () => {
    const res = await request(app).get('/energy/5');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      flavor: expect.any(String),
      rating: expect.any(Number)  
    });
  });
  afterAll(() => {
    pool.end();
  });
});
