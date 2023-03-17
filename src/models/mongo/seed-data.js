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
      bartvisit: {
        name: "To Visit",
        userid: "->users.bart"
      },
      bartrun: {
        name: "To Run",
        userid: "->users.bart"
      },
      margevisit: {
        name: "To Visit",
        userid: "->users.marge"
      },
      homervisit: {
        name: "To Visit",
        userid: "->users.homer"
      },
      homerrun: {
        name: "To Run",
        userid: "->users.homer"
      }
    },
    places: {
      _model : "Place",
      place_1 : {
        name: "Milhouse House",
        des: "316 Pikeland Ave. is the address of the house where Kirk, Luann, Milhouse and Milhouse's Dog live",
        lat: 50,
        lon: 50,
        img:"https://i.redd.it/ryosfzfkdyo51.jpg",
        placemarkid: "->placemarks.bartvisit"
      },
      place_2 : {
        name: "Skate Park",
        des: "A skatepark, or skate park, is a purpose-built recreational environment made for skateboarding, BMX, scootering, wheelchairs, and aggressive inline skating.",
        lat: 52,
        lon: 51,
        img:"https://www.visitcalifornia.com/sites/visitcalifornia.com/files/styles/welcome_image/public/VC_Skateparks_MagdalenaEckeYMCA_Supplied_IMG_5676_RT_1280x640.jpg",
        placemarkid: "->placemarks.bartvisit"
      },
      place_3 : {
        name: "School",
        des: "A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.",
        lat: 49,
        lon: 51,
        img:"https://www.chelmsfordlibrary.org/wp-content/uploads/simpsons-elementary.jpg",
        placemarkid: "->placemarks.bartrun"
      },
      place_4 : {
        name: "Dublin",
        des: "Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey. Its historic buildings include Dublin Castle, dating to the 13th century, and imposing St Patrick’s Cathedral, founded in 1191",
        lat: 53.350140,
        lon: -6.266155,
        img:"https://www.travelandleisure.com/thmb/oN8UalwH5T0Q47uqIAU0fEiKrM8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dublin-ireland-DUBLINTG0721-e1066115faf74b958a7b1d792ba13c1c.jpg",
        placemarkid: "->placemarks.margevisit"
      },
      place_5 : {
        name: "Paris",
        des: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
        lat: 48.864716,
        lon: 2.349014,
        img:"https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        placemarkid: "->placemarks.margevisit"
      },
      place_6 : {
        name: "Waterford",
        des: "Waterford, a seaport in southeast Ireland, is the country’s oldest city. It was founded by Vikings in 914 A.D. and parts of its ancient walled core remain.",
        lat: 52.259320,
        lon: -7.110070,
        img:"https://images.ireland.com/media/Images/Waterford/aa9d44f546024004ad09506874dfda83.jpg",
        placemarkid: "->placemarks.margevisit"
      },
      place_7 : {
        name: "Moe's Tavern",
        des: "Moe's Tavern is located on Walnut Street, next to King Toot's Music Store. Across the street is the Moeview Hotel and factory once owned by Bart Simpson.",
        lat: 53,
        lon: 52,
        img:"https://bloximages.chicago2.vip.townnews.com/insidenova.com/content/tncms/assets/v3/editorial/f/7b/f7b688ca-3dfa-11ec-a100-3711edf206cc/6184c3f0d4856.image.jpg",
        placemarkid: "->placemarks.homervisit"
      },
      place_8 : {
        name: "Springfield Nuclear Power Plant",
        des: "The Springfield Nuclear Power Plant (SNPP) is a two-unit pressurized water reactor nuclear power plant owned by Mr. Burns and is the main source of power in Springfield.",
        lat: 56,
        lon: 56,
        img:"https://www.energy.gov/sites/default/files/styles/full_article_width/public/2018/03/f49/Elektrownia_J%C4%85drowa_w_Springfield_0.png",
        placemarkid: "->placemarks.homerrun"
      },
      place_9 : {
        name: "School",
        des: "A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.",
        lat: 49,
        lon: 51,
        img:"https://www.chelmsfordlibrary.org/wp-content/uploads/simpsons-elementary.jpg",
        placemarkid: "->placemarks.homerrun"
      },
    }
  };
  