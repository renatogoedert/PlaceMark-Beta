import { Placemark } from "./placemark.js";
import {placeMongoStore } from "./place-mongo-store.js";

export const placemarkMongoStore = {
  async getAllPlacemarks() {
    const placemarks = await Placemark.find().lean();
    return placemarks;
  },

  async getPlacemarkById(id) {
    if (id) {
      const placemark = await Placemark.findOne({ _id: id }).lean();
      if (placemark) {
        placemark.places = await placeMongoStore.getPlacesByPlacemarkId(placemark._id);
      }
      return placemark;
    }
    return null;
  },

  async addPlacemark(placemark) {
    const newPlacemark = new Placemark(placemark);
    const placemarkObj = await newPlacemark.save();
    return this.getPlacemarkById(placemarkObj._id);
  },

  async getUserPlacemarks(id) {
    const placemark = await Placemark.find({ userid: id }).lean();
    return placemark;
  },

  async deletePlacemarkById(id) {
    try {
      await Placemark.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlacemarks() {
    await Placemark.deleteMany({});
  }
};
