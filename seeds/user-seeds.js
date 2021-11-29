const { User } = require('../models');

const userData = [
    {
        username: 'berowen5',
        email: 'ben@gmail.com',
        password: 'holygauca',
    }
]

const users = () => User.bulkCreate(users);

module.exports = users;