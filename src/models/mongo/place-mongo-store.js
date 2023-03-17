import { Place } from "./place.js";
import { Placemark } from "./placemark.js";

export const placeMongoStore = {
  async getAllPlaces() {
    const places = await Place.find().lean();
    return places;
  },

  async getPlacesByPlacemarkId(id) {
    const places = await Place.find({ placemarkid: id }).lean();
    return places;
  },

  async addPlace(placemarkId, place) {
    place.placemarkid = placemarkId;
    const newPlace = new Place(place);
    const placeObj = await newPlace.save();
    return this.getPlaceById(placeObj._id);
  },

  async getPlaceById(id) {
    if (id) {
      const place = await Place.findOne({ _id: id }).lean();
      return place;
    }
    return null;
  },

  async deletePlace(id) {
    try {
      await Place.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlaces() {
    await Place.deleteMany({});
  },

  async updatePlace(updatedPlace) {
    const place = await Place.findOne({ _id: updatedPlace._id });
    place.name = updatedPlace.name;
    place.lat = updatedPlace.lat;
    place.lon = updatedPlace.lon;
    place.des = updatedPlace.des;
    place.img = updatedPlace.img;
    await place.save();
  },
};