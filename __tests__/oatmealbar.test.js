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

  it('#POST /oatmealbar should add a new row to the table', async () => {
    const newOatmeal = {
      ingredient: 'Vanilla Extract',
      amount: '1 tsp'
    };
    const res = await request(app).post('/oatmealbar').send(newOatmeal);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newOatmeal
    });
  });

  it('#PUT /oatmealbar/:id should update the table values', async () => {
    const res = await request(app).put('/oatmealbar/4').send({
      ingredient: 'Blackberries'
    });
    expect(res.status).toBe(200);
    expect(res.body.ingredient).toBe('Blackberries');
  });
  
  it('#DELETE /oatmealbar/:id should delete the row from the database', async () => {
    const get = await request(app).get('/oatmealbar');  
    expect(get.body.length).toBe(6);

    const deleteRes = await request(app).delete('/oatmealbar/5');
    expect(deleteRes.status).toBe(200);

    const newGet = await request(app).get('/oatmealbar');  
    expect(newGet.body.length).toBe(5);
  });
  
  afterAll(() => {
    pool.end();
  });
});
