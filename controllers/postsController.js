const fetch = require("node-fetch");

module.exports = (req, res, next) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      const transformedPosts = posts.map(post => {
        return { ...post, link: `/post/${post.id}` };
      });
      const stylesPath = 'styles.css'
      return res.render("posts", { transformedPosts, stylesPath });
    })
    .catch(err => {
      const error = new Error('Error with fetching posts, please contact us.')
      next(error)
    });
};
