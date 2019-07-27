const axios = require('axios');
const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('../auth/authenticate');
const { insert, findUsername } = require('./models');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  // implement user registration
  try {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await insert({
      username,
      password: hashedPassword
    });
    return res.status(201).json({
      message: 'user created successfully',
      user
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'could not create user' });
  }
}

async function login(req, res) {
  // implement user login
  try {
    let { username, password } = req.body;
    const user = await findUsername(username).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome ${user.username}`,
        token
      });
    } else {
      res.status(401).json({ message: 'You shall not pass' });
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
