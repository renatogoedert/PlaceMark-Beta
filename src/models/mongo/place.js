import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placeSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number,
  des: String,
  img: String,
  placemarkid: {
    type: Schema.Types.ObjectId,
    ref: "Placemark",
  },
});

export const Place = Mongoose.model("Place", placeSchema);
