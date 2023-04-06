import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    replies: String,
    retuits: String,
  },
  { collection: "tuits" }
);
export default schema;
