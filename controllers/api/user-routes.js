const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User} = require('../../models');

// GET users
router.get('/', (req, res) => {
    User.findAll({
        attributes: ['username', 'email'],
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST new user
router.post('/', (req, res) =>{
    User.create(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    )
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;