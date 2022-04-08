const path = require("path");
const fs = require("fs").promises;
// const bcrypt = require("bcrypt");

const { sequelize } = require("./db");
const {
  Continent,
  Country,
  
  TraditionalFood,
  Music,
  TouristAttraction,
  Language,
  Currency,
} = require("./models");

const {
  User} = require("./models/index");


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
    {songName: "Mar eske Tuwaf (Fikir Eske Meqabir)",
     artistName: "Teddy Afro",
     musicVideo: "https://www.youtube.com/watch?v=mFzHpK7ibfo", 
     CountryId: 1}
];
  return musics;
};

const createTouristAttractions = async () => {
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
  console.log(users);
  const continents = await createContinents();
  const countries = await createCountries();
  const traditionalFoods = await createTraditionalFoods();
  const musics = await createMusics();
  const touristAttractions = await createTouristAttractions();
  const userPromises = users.map((user) => User.create(user));
  const continentPromises = continents.map((continent) => Continent.create(continent));
  const countryPromises = countries.map((country) => Country.create(country));
  const traditionalFoodPromises = traditionalFoods.map((traditionalFood) => TraditionalFood.create(traditionalFood));
  const musicPromises = musics.map((music) => Music.create(music));
  const touristAttractionPromises = touristAttractions.map((touristAttraction) => TouristAttraction.create(touristAttraction));
  await Promise.all([...userPromises, ...continentPromises, ...countryPromises, ...traditionalFoodPromises, ...musicPromises, ...touristAttractionPromises]);
  console.log("database populated!");
};

seed();
