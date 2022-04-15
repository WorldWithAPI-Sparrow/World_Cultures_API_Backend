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

const worldJSON1 = require("./worldJSON1.json");
//console.log(traditionalFoodJSON);

//const newJSON = {
//...traditionalFoodJSON,
//...countriesJSON,
//...continentsJSON,
//...languagesJSON,
// ...currenciesJSON,
//};
// console.log(newJSON);

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
  const countries = worldJSON1.map((c) => ({
    countryName: c.country,
    ContinentId: c.continentId,
  }));

  return countries;
};

//Need countryID for traditionalFood
const createTraditionalFoods = async () => {
  const traditionalFoods = worldJSON1.map((f) => ({
    myCountry: f.country,
    traditionalDish: f.dish,
    CountryId: f.countryId,
  }));

  return traditionalFoods;
};

const createMusics = async () => {
  const musics = worldJSON1.map((m) => ({
    musicVideo: m.music[0].MusicVideo,
    songName: m.music[0].SongTitle,
    artistName: m.music[0].Artist,
    CountryId: m.countryId,
  }));

  return musics;
};

const createTouristAttractions = async () => {
  const touristAttractions = worldJSON1.map((ta) => ({
    placesToVisit: ta.touristAttraction,
    myCountry: ta.country,
    CountryId: ta.countryId,
  }));
  return touristAttractions;
};

//Need countryID for language
const createLanguages = async () => {
  const Languages = worldJSON1.map((l) => ({
    myCountry: l.country,
    language: l.languages.toString(),
  }));
  return Languages;
};

//Need countryID for currency
const createCurrencies = async () => {
  const currencies = worldJSON1.map((cu) => ({
    myCountry: cu.country,
    currency: cu.currency_name,
    CountryId: cu.countryId,
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
