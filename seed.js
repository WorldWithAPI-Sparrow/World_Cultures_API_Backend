const path = require("path");
const fs = require("fs").promises;
// const bcrypt = require("bcrypt");

const { sequelize } = require("./db");
const {
  Continent,
  Country,
  User,
  TraditionalFood,
  Music,
  TouristAttraction,
  Language,
  Currency,
} = require("./models");

const createUsers = async () => {
  // let pw1 = await bcrypt.hash("myPassword", 2);
  // let pw2 = await bcrypt.hash("hi!!");

  const users = [
    { userName: "Lamin", userPassword: "myPassword" },
    { userName: "Anuja", userPassword: "hi!!" },
  ];

  return users;
};

const createContinents = async () => {
  const continents = [
    {continentName: "Africa", 
     continentMap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_EKjSJ2y8CANXjipl8arGgTCRBqJi63VAQ&usqp=CAU"}
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

const TraditionalFoods = async () => {
  const traditionalFoods = [
    {traditionalFoodName: "Injera", 
     CountryId: 1},
     {traditionalFoodName: "Gomen", 
     CountryId: 1},
     {traditionalFoodName: "Shiro", 
     CountryId: 1},
     {traditionalFoodName: "Sambusa", 
     CountryId: 1},
     {traditionalFoodName: "Kitfo", 
     CountryId: 1}
];
  return traditionalFoods;
};

const Music = async () => {
  const music = [
    {songName: "Mar eske Tuwaf (Fikir Eske Meqabir)",
     artistName: "Teddy Afro",
     musicVideo: "https://www.youtube.com/watch?v=mFzHpK7ibfo", 
     CountryId: 1}
];
  return music;
};

const TouristAttractions = async () => {
  const touristAttractions = [
    {placesToVisit: "Axum",
     CountryId: 1},
     {placesToVisit: "Lalibela",
     CountryId: 1},
     {placesToVisit: "The National Museum of Ethiopia",
     CountryId: 1}
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
    {language: "Birr",
     CountryId: 1},
];
  return currencies;
};

// function createCountryArray(results) {
//   let countryResults = [];

//   results.map((i) =>
//     country.create({
//       name: i["country.name"],
//     })
//   );
//   return countryResults;
// }

const seed = async () => {
  await sequelize.sync({ force: true });
  const users = await createUsers();
  const continents = await createContinents();
  const countries = await createCountries();
  const traditionalFoods = await createTraditionalFoods();
  const music = await createMusic();
  const touristAttractions = await createTouristAttraction();
  const languages = await createLanguages();
  const currencies = await createCurrencies();
  const traditionalFoodPromises = traditionalFoods.map((traditionalFood) => TraditionalFoods.create(traditionalFood));
  const userPromises = users.map((user) => User.create(user));
  const continentPromises = continents.map((continent) => Continents.create(continent));
  const countryPromises = countries.map((country) => Countries.create(country));
  const musicPromises = music.map((music) => Music.create(music));
  const touristAttractionPromises = touristAttractions.map((touristAttraction) => TouristAttractions.create(touristAttraction));
  const languagePromises = languages.map((language) => Langauge.create(language));
  const currencyPromises = currencies.map((currency) => Currency.create(currency));
  await Promise.all([...userPromises, ...continentPromises, ...countryPromises, ...traditionalFoodPromises, ...musicPromises, ...touristAttractionPromises, ...languagePromises, ...currencyPromises]);
  console.log("database populated!");
};

seed();
