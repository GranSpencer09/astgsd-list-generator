const express = require("express");
const path = require("path");
// const api = require("./public/assets/js/index");
const db = require("./db/db.json");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/api", api);

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Create a route for a GET request that will return the content of our `db.json` file
app.get("/api/db", (req, res) => {
  return res.json(db);
});

// // Wildcard route to direct users to a 404 page
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/pages/404.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
