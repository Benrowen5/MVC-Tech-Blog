const router = require('express').Router();
const sequelize = require('../config/connection');
// const {Models} = require('../models');

router.get('/', (req, res) => {
    res.render('homepage')
});

// router.get('/login', (req, res) => {

// });

module.exports = router;