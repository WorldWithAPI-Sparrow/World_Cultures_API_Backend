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

const traditionalFoodJSON = require("./node_modules/country-json/src/country-by-national-dish.json");
const countriesJSON = require("./node_modules/country-json/src/country-by-continent.json");
const languagesJSON = require("./node_modules/country-json/src/country-by-languages.json");
const currenciesJSON = require("./node_modules/country-json/src/country-by-currency-name.json");

//const newJSON = {
//...traditionalFoodJSON,
//...countriesJSON,
//...continentsJSON,
//...languagesJSON,
//};
//console.log(newJSON);

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

//Need to add continentID
const createCountries = async () => {
  const countries = countriesJSON.map((c) => c.country);

  return countries;
};

//Need countryID for traditionalFood
const createTraditionalFoods = async () => {
  const traditionalFoods = traditionalFoodJSON.map((f) => ({
    myCountry: f.country,
    traditionalDish: f.dish,
  }));

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

//Need countryID for language
const createLanguages = async () => {
  const Languages = languagesJSON.map((l) => ({
    myCountry: l.country,
    language: l.languages.join(),
  }));
  return Languages;
};

//Need countryID for currency
const createCurrencies = async () => {
  const currencies = currenciesJSON.map((cu) => ({
    myCountry: cu.country,
    currency: cu.currency_name,
  }));

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
  //const countryPromises = countries.map((country) => Country.create(country));
  const countryPromises = countries.map((country) =>
    Country.create({ countryName: country })
  );

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
