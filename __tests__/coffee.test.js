const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /coffee route should return a list of coffee methods', async () => {
    const res = await request(app).get('/coffee');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(5);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: 'Pour Over - Coffee Cone',
      grind_type: 'Med. Fine to Coarse',
      time: '2-3 Minutes'
    });
  });
  
  it('#GET /coffee/:id should return a specific coffee', async () => {
    const res = await request(app).get('/coffee/3');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      grind_type: expect.any(String),
      time: expect.any(String)
    });
  });
  afterAll(() => {
    pool.end();
  });
});
