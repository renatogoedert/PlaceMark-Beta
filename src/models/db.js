import { userMemStore } from "./mem/user-mem-store.js";
import { placemarkMemStore } from "./mem/placemark-mem-store.js";
import { placeMemStore } from "./mem/place-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { placemarkJsonStore } from "./json/placemark-json-store.js";
import { placeJsonStore } from "./json/place-json-store.js";

import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { placemarkMongoStore } from "./mongo/placemark-mongo-store.js";
import { placeMongoStore } from "./mongo/place-mongo-store.js";

export const db = {
  userStore: null,
  placemarkStore: null,
  placeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.placemarkStore = placemarkJsonStore;
        this.placeStore = placeJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        this.placemarkStore = placemarkMongoStore;
        this.placeStore = placeMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.placemarkStore = placemarkMemStore;
        this.placeStore = placeMemStore;
    }
  },
};
