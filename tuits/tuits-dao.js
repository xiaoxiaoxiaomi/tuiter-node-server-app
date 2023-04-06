import tuitsModel from "./tuits-model.js";
// export const findTuits = () => tuitsModel.find();
import mongoose from "mongoose";

const Tuit = mongoose.model(
  "Tuit",
  new mongoose.Schema({}, { collection: "tuits" })
);

export const findTuits = async () => {
  console.log("Trying to find tuits...");
  const result = await Tuit.find();
  console.log("Found", result.length, "tuits.");
  return result;
};

export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) =>
  tuitsModel.updateOne({ _id: tid }, { $set: tuit });
