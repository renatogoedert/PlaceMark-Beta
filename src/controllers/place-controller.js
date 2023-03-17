import { PlaceSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";

export const placeController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const place = await db.placeStore.getPlaceById(request.params.placeid);
      const viewData = {
        title: "Edit place",
        placemark: placemark,
        place: place,
      };
      return h.view("place-view", viewData);
    },
  },
 
  uploadImage: {
    handler: async function (request, h) {
      try {
        const place = await db.placeStore.getPlaceById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          place.img = url;
          await db.placeStore.updatePlace(place);
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