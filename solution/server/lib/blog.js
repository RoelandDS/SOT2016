'use strict';
const Blog = require('./../models/blog.model');

module.exports = {
  newBlog: newBlog,
  saveNewBlog: saveNewBlog,
  getAllBlogs: getAllBlogs,
  getBlogById: getBlogById,
  saveComment: saveComment
};

function newBlog(req, res){
  res.status(200).render('newBlog', {name: 'Roeland'});
}

function saveNewBlog(req, res){
  let newBlog = new Blog();
  newBlog.title = req.body.title;
  newBlog.body = req.body.blogBody;
  newBlog.name = req.body.name;

  newBlog.save().then((data) => {
    console.log(data);
    res.redirect('/');
  });
}

function getAllBlogs(done){
  Blog
    .find()
    .sort({uploadDate: -1})
    .then((data) => {
    return done(null, data);
  });
}

function getBlogById(req, res){
  Blog
    .findOne({_id: req.params.id})
    .then((data) => {
      data.comments.sort(function (c1, c2) { return c2.commentDate - c1.commentDate; });
      res.status(200).render('blogDetail', {blog: data});
    });

}

function saveComment(req, res){
  Blog
    .findOne({_id: req.params.id})
    .then((blog) => {
      let newComment = {};
      newComment.name = req.body.name;
      newComment.comment = req.body.comment;
      blog.comments.push(newComment);

      blog
        .save()
        .then((data) => {
          data.comments.sort(function (c1, c2) { return c2.commentDate - c1.commentDate; });
          res.status(200).render('blogDetail', {blog: data});
      })

    });
}