"use strict";

let Services = require('../services');
let AuthorService = Services.Author;
let PostService = Services.Post;

module.exports = {
  findOne : findAuthorByUsernameOrId,
  renderAuthorPage : renderAuthorPage,
  renderAuthorPostsPage : renderAuthorPostsPage
};

function renderAuthorPage(req, res) {
    res.render('author/view', {
      author : req.author
    });
}

function renderAuthorPostsPage(req, res, next) {
    PostService.findPostsByAuthor(req.author.id).then(_posts => {
      res.render('author/posts', {
        author : req.author,
        posts : _posts
      });
    })
    .catch(err => next(err));
}

function findAuthorByUsernameOrId(req, res, next, author) {
    AuthorService.findByUsernameOrId(author)
    .then(_author => {
      req.author = _author;
      return next();
    })
    .catch(err => next(err));
}