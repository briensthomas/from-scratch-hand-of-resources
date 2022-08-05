const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET should return a list of smoothie ingredients', async () => {
    const res = await request(app).get('/smoothie');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(6);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      amount: expect.any(String)
    });
  });

  it('#GET /smoothie/:id should return information for a specific smoothie', async () => {
    const res = await request(app).get('/smoothie/2');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Whey Protein (Vanilla)',
      amount: '1 Scoop'
    });
  });

  it('#POST /smoothie should add a new smoothie object', async () => {
    const newSmoothie = {
      name: 'Kale',
      amount: '1 Leaf'
    };
    const res = await await request(app).post('/smoothie').send(newSmoothie);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newSmoothie
    });

    it('#PUT /smoothie/:id should update the values for an ingredient', async () => {
      const res = await request(app).put('/smoothie/2').send({
        name: 'Collagen Protein',
        amount: '1 Scoop'
      });
      expect(res.status).toBe(200);
      expect(res.body.name).toBe('Collagen Protein');
      expect(res.body.amount).toBe('1 Scoop');
    });
  });
  afterAll(() => {
    pool.end();
  });
});
