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

// Load Page model
const Page = require("../../models/Page");

// @route GET api/pages/test
// @description tests pages route
// @access Public
router.get("/test", (req, res) => res.send("page route testing!"));

// @route GET api/pages
// @description Get all pages
// @access Public
router.get("/", (req, res) => {
  Page.find()
    .then(pages => res.json(pages))
    .catch(err => res.status(404).json({ nopagesfound: "No pages found" }));
});

// @route GET api/pages/:id
// @description Get single page by id
// @access Public
router.get("/:id", (req, res) => {
  Page.findById(req.params.id)
    .then(page => res.json(page))
    .catch(err => res.status(404).json({ nopagefound: "No page found" }));
});

// @route GET api/pages
// @description add/save page
// @access Public

// router.page("/", (req, res) => {
//   Page.create(req.body)
//     .then(page => res.json({ msg: "page added successfully" }))
//     .catch(err => res.status(400).json({ error: "Unable to add this page" }));
// });

router.post("/", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const page = new Page({
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
  page
    .save()
    .then(result => {
      res.status(201).json({
        message: "page added successfully!",
        pageCreated: {
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

// @route GET api/pages/:id
// @description Update page
// @access Public
router.put("/:id", (req, res) => {
  Page.findByIdAndUpdate(req.params.id, req.body)
    .then(page => res.json({ msg: "page Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/pages/:id
// @description Delete page by id
// @access Public
router.delete("/:id", (req, res) => {
  Page.findByIdAndRemove(req.params.id, req.body)
    .then(page => res.json({ mgs: "page entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a post" }));
});

module.exports = router;
