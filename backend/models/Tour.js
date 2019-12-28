const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinearySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String
  },
  date: { type: Date },
  time: { type: Number },
  description: { type: String }
});

const faqsSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: {
    type: String
  },
  answer: { type: String }
});

const gallerySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  img: {
    type: String
  }
});

const TourSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String },
    profileImg: { type: String },
    date: { type: Date, default: Date.now },
    status: { type: String },
    visibility: { type: String },
    schedule: { type: String },
    readability: { type: String, default: "Ok" },
    uncategorized: { type: Boolean },
    design: { type: Boolean },
    development: { type: Boolean },
    writing: { type: Boolean },
    author: { type: mongoose.Schema.ObjectId, ref: "User" },
    comments: [{ type: mongoose.Schema.ObjectId, ref: "Comment" }],
    likes: [{ type: mongoose.Schema.ObjectId, ref: "Like" }],
    itineary: [itinearySchema],
    faqs: [faqsSchema],
    gallery: [gallerySchema],
    direction: { type: String },
    include: { type: String },
    exclude: { type: String }
  },
  {
    collection: "tours"
  }
);

module.exports = Tour = mongoose.model("tour", TourSchema);
