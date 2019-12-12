const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    likes: [{ type: mongoose.Schema.ObjectId, ref: "Like" }]
    // categories: [
    //   { type: mongoose.Schema.Types.ObjectId,
    //     ref: "categorieslist",
    //     uncategorized: {type: Boolean},
    //     design: { type: Boolean },
    //     development: { type: Boolean },
    //     writing: { type: Boolean },
    //   }
    // ]
  },
  {
    collection: "tours"
  }
);

module.exports = Tour = mongoose.model("tour", TourSchema);
