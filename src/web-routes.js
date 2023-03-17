import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { placemarkController } from "./controllers/placemark-controller.js";
import { adminController } from "./controllers/admin-controller.js";
import { adminDashboardController } from "./controllers/admin-dashboard-controller.js";
import { placeController } from "./controllers/place-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addplacemark", config: dashboardController.addPlacemark },
  { method: "GET", path: "/dashboard/deleteplacemark/{id}", config: dashboardController.deletePlacemark },

  { method: "GET", path: "/about", config: aboutController.index },

  { method: "GET", path: "/placemark/{id}", config: placemarkController.index },
  { method: "POST", path: "/placemark/{id}/addplace", config: placemarkController.addPlace },
  { method: "GET", path: "/placemark/{id}/deleteplace/{placeid}", config: placemarkController.deletePlace },
  { method: "POST", path: "/placemark/{id}/uploadimage", config: placemarkController.uploadImage },

  { method: "POST", path: "/place/{id}/uploadimage", config: placeController.uploadImage },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

  { method: "GET", path: "/admindashboard", config: adminDashboardController.index },
  { method: "GET", path: "/adminusers", config: adminController.index },
  { method: "GET", path: "/adminusers/deleteuser/{id}", config: adminController.deleteUser },
];
