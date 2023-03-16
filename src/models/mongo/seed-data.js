export const seedData = {
    users: {
      _model: "User",
      admin: {
        firstName: "Admin",
        lastName: "Admin",
        email: "admin@admin.com",
        password: "admin"
      },
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    placemarks: {
      _model: "Placemark",
      visit: {
        name: "To Visit",
        userid: "->users.bart"
      }
    },
    places: {
      _model : "Place",
      place_1 : {
        name: "Milhouse House",
        des: "316 Pikeland Ave. is the address of the house where Kirk, Luann, Milhouse and Milhouse's Dog live",
        lat: 50,
        lon: 50,
        placemarkid: "->placemarks.visit"
      },
    }
  };
  