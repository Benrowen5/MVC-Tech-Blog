const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');


router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    res.render('dashboard', {

    })
    // .catch(err => {
    //     res.status(500).json(err);
    // });
});

module.exports = router;