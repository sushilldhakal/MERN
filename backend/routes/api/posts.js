let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  uuidv4 = require("uuid/v4"),
  router = express.Router();

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, uuidv4() + "-" + fileName);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});

// Load Post model
const Post = require("../../models/Post");

// @route GET api/posts/test
// @description tests posts route
// @access Public
router.get("/test", (req, res) => res.send("post route testing!"));

// @route GET api/posts
// @description Get all posts
// @access Public
router.get("/", (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

// @route GET api/posts/:id
// @description Get single post by id
// @access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No post found" }));
});

// @route GET api/posts
// @description add/save post
// @access Public

// router.post("/", (req, res) => {
//   Post.create(req.body)
//     .then(post => res.json({ msg: "post added successfully" }))
//     .catch(err => res.status(400).json({ error: "Unable to add this post" }));
// });

router.post("/", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    name: req.body.name,
    profileImg: url + "/public/" + req.file.filename,
    status: req.body.status,
    schedule: req.body.schedule,
    visibility: req.body.visibility,
    readability: req.body.readability,
    uncategorized: req.body.uncategorized,
    design: req.body.design,
    development: req.body.development,
    writing: req.body.writing
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: "post added successfully!",
        postCreated: {
          _id: result._id,
          name: result.name,
          profileImg: result.profileImg,
          title: result.title,
          description: result.description,
          status: result.status,
          schedule: result.schedule,
          visibility: result.visibility,
          readability: result.readability,
          uncategorized: result.uncategorized,
          design: result.design,
          development: result.development,
          writing: result.writing
        }
      });
    })
    .catch(err => {
      console.log(err),
        res.status(500).json({
          error: err
        });
    });
});

// @route GET api/posts/:id
// @description Update post
// @access Public
router.put("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => res.json({ msg: "post Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/posts/:id
// @description Delete post by id
// @access Public
router.delete("/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id, req.body)
    .then(post => res.json({ mgs: "Post entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a post" }));
});

module.exports = router;
