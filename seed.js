const path = require("path");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const { sequelize } = require("./db");

const {
  Continent,
  Country,
  TraditionalFood,
  Music,
  TouristAttraction,
  Language,
  Currency,
  User,
} = require("./models/index");


const createUsers = async () => {
  let pw1 = await bcrypt.hash("myPassword", 2);
  let pw2 = await bcrypt.hash("hi!!", 2);

  const users = [
    { userName: "Lamin", userPassword: pw1 },
    { userName: "Anuja", userPassword: pw2 },
  ];

  return users;
};

const createContinents = async () => {
  const continents = [
    {
      continentName: "Africa",
      continentMap:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_EKjSJ2y8CANXjipl8arGgTCRBqJi63VAQ&usqp=CAU",
      
    },
    {
      continentName: "Antarctica",
      continentMap:
        "https://media.nationalgeographic.org/assets/photos/000/273/27325.jpg",
    },
    {
      continentName: "Asia",
      continentMap: "https://www.geographicguide.com/pictures/map-physical.jpg",
    },
    {
      continentName: "Australia and Oceana",
      continentMap:
        "https://www.freeworldmaps.net/australia/australia-map-physical.jpg",
    },
    {
      continentName: "Europe",
      continentMap: "https://geology.com/world/cia/europe-physical-map.jpg",
    },
    {
      continentName: "North America",
      continentMap:
        "https://media.nationalgeographic.org/assets/photos/000/276/27666.jpg",
    },
    {
      continentName: "South America",
      continentMap:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Map_of_South_America_%28physical%2C_political%2C_population%29_with_legend.jpg/640px-Map_of_South_America_%28physical%2C_political%2C_population%29_with_legend.jpg",
    },
  ];
  return continents;
};

const createCountries = async () => {
  const countries = [
    {countryName: "Ethiopia", 
     countryMap: "https://www.freeworldmaps.net/africa/ethiopia/ethiopia-physical-map.jpg",
     ContinentId: 1}
];
  return countries;
};


  const createTraditionalFoods = async () => {
    const traditionalFoods = [
      {traditionalDish: "Injera", 
       CountryId: 1}, 
       {traditionalDish: "Gomen", 
       CountryId: 1},
       {traditionalDish: "Shiro", 
       CountryId: 1}, 
       {traditionalDish: "Sambusa", 
       CountryId: 1},
       {traditionalDish: "Kitfo", 
       CountryId: 1}
  ];
    return traditionalFoods;
  };

const createMusics = async () => {
  const musics = [
    {
      songName: "Mar eske Tuwaf (Fikir Eske Meqabir)",
      artistName: "Teddy Afro",
      musicVideo: "https://www.youtube.com/watch?v=mFzHpK7ibfo",
      CountryId: 1,
    },
  ];
  return musics;
};

const createTouristAttractions = async () => {
  const touristAttractions = [
    { placesToVisit: "Axum", CountryId: 1 },
    { placesToVisit: "Lalibela", CountryId: 1 },
    { placesToVisit: "The National Museum of Ethiopia", CountryId: 1 },
  ];
  return touristAttractions;
};

const createLanguages = async () => {
  const languages = [
    {language: "Amharic",
     CountryId: 1},
    {language: "Oromo",
     CountryId: 1},
    {language: "Tigrigna",
     CountryId: 1}
];
  return languages;
};

const createCurrencies = async () => {
  const currencies = [
    {currency: "Birr",
     CountryId: 1},
];

  return currencies;
};

const seed = async () => {
  await sequelize.sync({ force: true });
  const users = await createUsers();
  const continents = await createContinents();
  const countries = await createCountries();
  const traditionalFoods = await createTraditionalFoods();
  const musics = await createMusics();
  const touristAttractions = await createTouristAttractions();
  const languages = await createLanguages();
  const currencies = await createCurrencies();
  const userPromises = users.map((user) => User.create(user));
  const continentPromises = continents.map((continent) =>
    Continent.create(continent)
  );
  const countryPromises = countries.map((country) => Country.create(country));
  const traditionalFoodPromises = traditionalFoods.map((traditionalFood) =>
    TraditionalFood.create(traditionalFood)
  );
  const musicPromises = musics.map((music) => Music.create(music));
  const touristAttractionPromises = touristAttractions.map(
    (touristAttraction) => TouristAttraction.create(touristAttraction)
  );
  const languagePromises = languages.map((language) =>
    Language.create(language)
  );
  const currencyPromises = currencies.map((currency) =>
    Currency.create(currency)
  );
  await Promise.all([
    ...userPromises,
    ...continentPromises,
    ...countryPromises,
    ...traditionalFoodPromises,
    ...musicPromises,
    ...touristAttractionPromises,
    ...languagePromises,
    ...currencyPromises,
  ]);
  console.log("database populated!");
};

seed();
