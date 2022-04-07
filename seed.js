const path = require("path");
const fs = require("fs").promises;
const bcrypt = require("bcrypt");

const { sequelize } = require("./db");
const {
  Continents,
  Countries,
  User,
  TraditionalFoods,
  Musics,
  TouristAttractions,
  Languages,
  Currencies,
} = require("./models");

const createUsers = async () => {
  let pw1 = await bcrypt.hash("myPassword", 2);
  let pw2 = await bcrypt.hash("hi!!");

  const users = [
    { userName: "Lamin", userPassword: pw1 },
    { userName: "Anuja", userPassword: pw2 },
  ];

  return users;
};

// const continents = [
//     {continentName: "Africa", continentMap: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_EKjSJ2y8CANXjipl8arGgTCRBqJi63VAQ&usqp=CAU"}
// ];

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
  await sequalize.sync({ force: true });
  const users = await createUsers();
  const userPromises = users.map((user) => User.create(user));
  //   const continentsPromises = continents.map((item) => Continents.create(continent));
  await Promise.all([...userPromises, ...itemPromises]);
  console.log("database populated!");
};

seed();
