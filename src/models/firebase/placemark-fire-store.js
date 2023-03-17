import { fireStore } from "./connect.js";
import { placeFireStore } from "./place-fire-store.js";
import { Placemark } from "./placemark.js";

export const placemarkFireStore = {
  async getAllPlacemarks() {
    const placemarks = await fireStore.collection("placemark").get();
    return placemarks;
  },

  async getPlacemarkById(id) {
    if (id) {
      const placemarkRef = await fireStore.collection("placemark").doc(id).get();
      const placemark = placemarkRef.data();
      if (placemark) {
        placemark.places = await placeFireStore.getPlacesByPlacemarkId(id);
      }
      return placemark;
    }
    return null;
  },

  async addPlacemark(placemark) {
    const newObj = await fireStore.collection("placemark").add(placemark);
    const obj = await newObj.get();
    const u = obj.data();
    return u;
  },

  async getUserPlacemarks(id) {
    const placemarksRef = await fireStore.collection("placemark").where("userid", "==", id).get();
    const placemarks = placemarksRef.docs.map((doc) => doc.data());
    return placemarks;
  },

  async deletePlacemarkById(id) {
    try {
      await fireStore.collection("placemark").doc(id).delete();
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPlacemarks() {
    const placemarksRef = await fireStore.collection("placemark").get();
    const batch = fireStore.batch();
    placemarksRef.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  },


  async updatePlacemark(updatedPlacemark) {
    const placemarkRef = await fireStore.collection("placemark").doc(updatedPlacemark._id);
    await placemarkRef.update({
      name: updatedPlacemark.name,
      img: updatedPlacemark.img,
    });
  }
};
