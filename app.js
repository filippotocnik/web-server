const express = require("express");
const app = express();
const port = 3000;
const postsController = require("./controllers/postsController");
const postDetailController = require("./controllers/postDetailController");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", postsController);

app.get("/post/:id", postDetailController);

app.get("*", (req, res, next) => {
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  const stylesPath = "../styles.css";
  res.render("error", { error, stylesPath });
});

app.listen(port, () => console.log(`App is running on port ${port}!`));

module.exports = app;
