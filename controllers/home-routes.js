const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
        res.render('homepage', {
        
    })
    // .catch(err => {
    //     res.status(500).json(err);
    // });
});

router.get('/login', (req,res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login',{

    })
    .catch(err => {
        res.status(500).json(err);
    });
});


module.exports = router;