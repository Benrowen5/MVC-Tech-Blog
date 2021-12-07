const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');


router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']            
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        })
    })   
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;