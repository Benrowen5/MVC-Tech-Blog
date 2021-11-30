const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// GET route for all posts to be displayed on homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get route for individual post pages
router.get('/post/:id', (req, res) => {
    Post.findAll({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
    })
    .then(dbPostData => {
        if(!dbPostData) { 
            res.status(404).json({ message: 'There is no post associated with the id provided.'});
            return;
        }
        const post = dbPostData.map({plain: true});
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get route for login page
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login',{

    })
    // .catch(err => {
    //     res.status(500).json(err);
    // });
});


module.exports = router;