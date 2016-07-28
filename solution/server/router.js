'use strict';
const blog = require('./lib/blog');

module.exports = (app) => {
  app.get('/', (req, res) => {
    blog.getAllBlogs((err, blogs) => {
      res.status(200).render('index', {blogs: blogs});
    });
  });

  app.get('/newBlog', blog.newBlog);
  app.post('/newBlog', blog.saveNewBlog);
  app.get('/blog/:id', blog.getBlogById);
  app.post('/newComment/:id', blog.saveComment);
};