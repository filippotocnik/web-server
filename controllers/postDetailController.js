const fetch = require("node-fetch");

module.exports = (req, res, next) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then(res => res.json())
    .then(post => {
      const stylesPath = "../styles.css";
      if (!post.title) {
        const error = new Error("Error with fetching post, please contact us.");
        next(error);
      } else {
        return res.render("postDetail", { post, stylesPath });
      }
    })
    .catch(err => {
      const error = new Error("Error with fetching post, please contact us.");
      next(error);
    });
};
