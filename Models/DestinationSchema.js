import mongoose from "mongoose";
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
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
});

const destinations = mongoose.model("destinations", destinationSchema);

export default destinations;
