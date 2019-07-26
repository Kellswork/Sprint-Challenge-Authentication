const server = require('../../api/server');
const db = require('../../database/dbConfig');
const request = require('supertest');

beforeAll(async () => {
  await db('users').truncate();
});

describe(' register', () => {
  it('it registers a user', () => {
    const user = {
      username: 'kays',
      password: '1234'
    };
    return request(server)
      .post('/api/register')
      .send(user)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(201);
        expect(res.body.message).toEqual('user created successfully');
        expect(res.body.user.username).toEqual(user.username);
      });
  });
});

describe('login', () => {
  it('it logs in a user', () => {
    const user = {
      username: 'kays',
      password: '1234'
    };
    return request(server)
      .post('/api/login')
      .send(user)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.message).toEqual('Welcome kays');
      });
  });
  it('it should return a 401 if user does not exit', () => {
    const user = {
      username: 'kay',
      password: '1234'
    };
    return request(server)
      .post('/api/login')
      .send(user)
      .expect(401)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(401);
        expect(res.body.message).toEqual('You shall not pass');
      });
  });
});
