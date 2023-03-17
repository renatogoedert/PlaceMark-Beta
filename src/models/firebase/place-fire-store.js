import { Place } from "./place.js";
import { fireStore } from "./connect.js";

export const placeFireStore = {
    async getAllPlaces() {
      const places = await fireStore.collection("place").get();
      return places;
    },
  
    async getPlacesByPlacemarkId(id) {
      const places = await fireStore.collection("places").where("placemarkid", "==", id).get();
      return places;
    },
  
    async addPlace(placemarkId, place) {
      place.placemarkid = placemarkId;
      const newPlace = new Place(place);
      const placeObj =  await fireStore.collection("place").doc().set(newPlace);
      return this.getPlaceById(placeObj._id);
    },
  
    async getPlaceById(id) {
      if (id) {
        const place =  await fireStore.collection("place").doc(id).get();
        return place;
      }
      return null;
    },
  
    async deletePlace(id) {
      try {
        await fireStore.collection("place").doc(id).delete();
      } catch (error) {
        console.log("bad id");
      }
    },
  
    async deleteAllPlaces() {
      const batch = fireStore.batch();
      const placesRef = await fireStore.collection("place").get();
      placesRef.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
    },
  
    async updatePlace(place, updatedPlace) {
      const placeRef = fireStore.collection("place").doc(place._id);
      await placeRef.update({
        name: updatedPlace.name,
        lat: updatedPlace.lat,
        lon: updatedPlace.lon,
        des: updatedPlace.des,
      });
    },
  };
  