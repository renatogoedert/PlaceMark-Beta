import { db } from "../models/db.js";
import { PlaceSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const viewData = {
        name: "Placemark",
        placemark: placemark,
      };
      return h.view("placemark-view", viewData);
    },
  },

  addPlace: {
    validate: {
      payload: PlaceSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("placemark-view", { title: "Add place error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPlace = {
        name: request.payload.name,
        lat: Number(request.payload.lat),
        lon: Number(request.payload.lon),
        des: request.payload.des,
      };
      await db.placeStore.addPlace(placemark._id, newPlace);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

  deletePlace: {
    handler: async function(request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.placeStore.deletePlace(request.params.placeid);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          placemark.img = url;
          await db.placemarkStore.updatePlacemark(placemark);
        }
        return h.redirect(`/dashboard`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/dashboard`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },
};
