const { Post } = require('../models');

const postData = [
    {
        title: "first post",
        post_url: "www.google.com",
        user_id: 1 
    },
    {
        title: "second post",
        post_url: "www.runescape.com",
        user_id: 2 
    }
]

const posts = () => Post.bulkCreate(posts);

module.exports = posts;