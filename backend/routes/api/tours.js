let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  uuidv4 = require("uuid/v4"),
  router = express.Router();

const DIR = "./public/";

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    // Mimetype stores the file type, set extensions according to filetype
    switch (file.mimetype) {
      case "image/jpeg":
        ext = ".jpeg";
        break;
      case "image/png":
        ext = ".png";
        break;
      case "image/gif":
        ext = ".gif";
        break;
    }

    cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
  }
});
const upload = multer({ storage: storage });

router.post("/uploadHandler", upload.single("file"), function(req, res, next) {
  if (req.file && req.file.originalname) {
    console.log(`Received file ${req.file.originalname}`);
  }

  res.send({ responseText: req.file.path }); // You can send any response to the user here
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname
//       .toLowerCase()
//       .split(" ")
//       .join("-");
//     cb(null, uuidv4() + "-" + fileName);
//   }
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   }
// });

// Load tour model
const Tour = require("../../models/Tour");

// @route GET api/Tours/test
// @description tests Tours route
// @access Public
router.get("/test", (req, res) => res.send("Tour route testing!"));

// @route GET api/tours
// @description Get all tours
// @access Public
router.get("/", (req, res) => {
  Tour.find()
    .then(tours => res.json(tours))
    .catch(err => res.status(404).json({ notoursfound: "No tours found" }));
});

// @route GET api/tours/:id
// @description Get single tour by id
// @access Public
router.get("/:id", (req, res) => {
  Tour.findById(req.params.id)
    .then(tour => res.json(tour))
    .catch(err => res.status(404).json({ notourfound: "No tour found" }));
});

// @route GET api/tours
// @description add/save tour
// @access Public

// router.tour("/", (req, res) => {
//   tour.create(req.body)
//     .then(tour => res.json({ msg: "tour added successfully" }))
//     .catch(err => res.status(400).json({ error: "Unable to add this tour" }));
// });

router.post("/", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const tour = new Tour({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    name: req.body.name,
    profileImg: url + "/public/" + req.file.filename,
    profileImg: req.file.path,
    status: req.body.status,
    schedule: req.body.schedule,
    visibility: req.body.visibility,
    readability: req.body.readability,
    uncategorized: req.body.uncategorized,
    design: req.body.design,
    development: req.body.development,
    writing: req.body.writing
  });
  tour
    .save()
    .then(result => {
      res.status(201).json({
        message: "tour added successfully!",
        tourCreated: {
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

// @route GET api/tours/:id
// @description Update tour
// @access Public
router.put("/:id", (req, res) => {
  Tour.findByIdAndUpdate(req.params.id, req.body)
    .then(tour => res.json({ msg: "tour Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/tours/:id
// @description Delete tour by id
// @access Public
router.delete("/:id", (req, res) => {
  Tour.findByIdAndRemove(req.params.id, req.body)
    .then(tour => res.json({ mgs: "tour entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a post" }));
});

module.exports = router;
