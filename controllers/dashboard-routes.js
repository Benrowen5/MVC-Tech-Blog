const router = require('express').Router();
const sequelize = require('../config/connection');
// const {Models} = require('../models');

router.get('/', (req, res) => {
    console.log('dashboard');
    res.render('dashboard', {});
});

module.exports = router;