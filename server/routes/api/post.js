import * as PostController from '../../controllers/post';

module.exports = function(app) {
  // Get all Posts
  app.get('/api/getPosts', PostController.getPosts);

  // Get one post by title
  app.get('/api/getPost', PostController.getPost);

  // Add a new Post
  app.post('/api/addPost', PostController.addPost);

  // Delete a Post
  app.post('/api/deletePost', PostController.deletePost);

};
