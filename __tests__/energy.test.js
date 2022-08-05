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

  it('#POST /energy should add a new energy_drink object to the table', async () => {
    const newEnergy = {
      name: 'Bang Energy',
      flavor: 'Cotton Candy',
      rating: 5
    };
    const res = await request(app).post('/energy').send(newEnergy);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newEnergy
    });
  });

  it('#PUT /energy/:id should update a row on the table by id', async () => {
    const res = await request(app).put('/energy/2').send({
      flavor: 'Green',
      rating: 10,
    });
    expect(res.status).toBe(200);
    expect(res.body.flavor).toBe('Green');
    expect(res.body.rating).toBe(10);
  });
  afterAll(() => {
    pool.end();
  });

  it('#DELETE /energy/:id should delete a row from the table by id', async () => {
    const res = await request(app).delete('/energy/1');
    expect(res.status).toBe(200);

    const deleteRes = await request(app).get('/energy/1');
    expect(deleteRes.status).toBe(404);
  });
});
