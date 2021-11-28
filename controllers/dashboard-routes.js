const router = require('express').Router();
const sequelize = require('../config/connection');
// const {Models} = require('../models');

router.get('/', (req, res) => {
    console.log('homepage');
});

module.exports = router;