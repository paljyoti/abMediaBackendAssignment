import mongoose from "mongoose";

const packageSchema = {
  title: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  Image: {
    type: String,
    require: true,
  },
};

const packages = mongoose.model("packages", packageSchema);

export default packages;
