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

  it('#POST /coffee should be able to receive a coffee object', async () => {
    const newCoffee = {
      name: 'Japanese Style Iced Coffee',
      grind_type: 'Med. Coarse',
      time: '5 Minutes'
    };
    const res = await request(app).post('/coffee').send(newCoffee);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newCoffee
    });
  });

  it('#PUT /coffee should modify an already existing row within the coffee table', async () => {
    const res = await request(app).put('/coffee/2').send({
      time: '5 Minutes'
    });
    expect(res.status).toBe(200);
    expect(res.body.time).toBe('5 Minutes');
  });

  it('#DELETE /coffee/:id should delete an existing coffee row by id', async () => {
    const get = await request(app).get('/coffee');  
    expect(get.body.length).toBe(5);

    const deleteRes = await request(app).delete('/coffee/5');
    expect(deleteRes.status).toBe(200);

    const newGet = await request(app).get('/coffee');  
    expect(newGet.body.length).toBe(4);
  });
  afterAll(() => {
    pool.end();
  });
});
