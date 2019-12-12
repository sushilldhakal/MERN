// app.js

const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");

// routes
const posts = require("./routes/api/posts");

const pages = require("./routes/api/pages");

const tours = require("./routes/api/tours");

const app = express();

// Connect Database
connectDB();

// cors
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

app.use("/public", express.static("public"));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/posts", posts);
app.use("/api/pages", pages);
app.use("/api/tours", tours);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
