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
  
  it('#GET /donuts/:id should return a specific donuts details', async () => {
    const res = await request(app).get('/donuts/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      ingredients: expect.any(String)
    });
  });

  it('#POST /donuts should add a new donut object', async () => {
    const newDonut = {
      name: 'The Sundae',
      ingredients: 'Fudge Glaze, Chocolate Cake Chunks, Sprinkles, Waffle Cone Pieces'
    };
    const res = await request(app).post('/donuts').send(newDonut);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newDonut
    });
  });

  it('#PUT /donuts/:id should update a donuts information', async () => {
    const res = await request(app).put('/donuts/6').send({
      ingredients: 'Fudge, Cake, and Sprinkles',
    });
    expect(res.status).toBe(200);
    expect(res.body.ingredients).toBe('Fudge, Cake, and Sprinkles');
  });
  
  afterAll(() => {
    pool.end();
  });
});
