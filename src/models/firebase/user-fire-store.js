import { fireStore } from "./connect.js";
import { User } from "./user.js";


export const userFireStore = {
  async getAllUsers() {
    const users = await fireStore.collection("user").get();
  return users.docs.map(doc => doc.data());
  },

  async getUserById(id) {
    if (id) {
      const userDoc = await fireStore.collection("user").doc(id).get();
      const userData = userDoc.data();
      return userData;
    }
    return null;
  },
     
  async addUser(user) {
    const newUser = await fireStore.collection("user").add(user);
    const userObj = await newUser.get();
    const u = userObj.data();
    return u;
  },

  async getUserByEmail(email) {
    const querySnapshot = await fireStore.collection("user").where("email", "==", email).get();
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return userData;
    }
    return null;
  },

  async deleteUserById(id) {
    try {
      await fireStore.collection("user").doc(id).delete();
    } catch (error) {
      console.log("Error deleting user:", error.message);
      throw error;
    }
  },

  async deleteAll() {
    const batch = fireStore.batch();
    const query = await fireStore.collection("user").get();
    query.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  }
};