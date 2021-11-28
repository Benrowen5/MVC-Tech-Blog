const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
    console.log('dashboard');
    res.render('dashboard', {

    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;