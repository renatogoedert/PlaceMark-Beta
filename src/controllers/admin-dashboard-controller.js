import { db } from "../models/db.js";

export const adminDashboardController = {
    index: {
        handler: async function (request, h) {
          const users = await db.userStore.getAllUsers();
          const viewData = {
            title: "Admin Dashboard",
            users: users,
          };
          return h.view("admin-view", viewData);
        },
    }
}