const bcrypt = require("bcrypt");
const saltRounds = 2;
const { use } = require("bcrypt/promises");

const res = require("express/lib/response");

const {
  Continent,
  Country,
  TraditionalFood,
  Music,
  TouristAttraction,
  Language,
  Currency,
  User,
} = require("../models");

const PORT = 3000;

const routes = (app) => {
  const jwt = require("express-jwt");
  const jwks = require("jwks-rsa");

  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-z8lrysnv.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "localhost:3000",
    issuer: "https://dev-z8lrysnv.us.auth0.com/",
    algorithms: ["RS256"],
  });
  //---------------------Routes for Continents ---------------------------------------
  //Get all continents
  app.get("/continents", jwtCheck, async (req, res) => {
    let continents = await Continent.findAll();
    res.json({ continents });
  });

  //Get continent by ID
  app.get("/continents/:id", async (req, res) => {
    let oneContinent = await Continent.findByPk(req.params.id);
    res.json({ oneContinent });
  });

  // create a continent
  app.post("/continents", async (req, res) => {
    let newContinent = await Continent.create(req.body);
    res.json({ newContinent });
  });

  //update a continent
  app.put("/continents/:id", async (req, res) => {
    let updatedContinent = await Continent.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedContinent });
  });

  // delete a continent
  app.delete("/continents/:id", jwtCheck, async (req, res) => {
    await Continent.destroy({ where: { id: req.params.id } });
    res.send(Continent ? "Continent deleted" : "Continent delition failed!");
  });

  //---------------------Routes for Countries ---------------------------------------

  //Get all countries
  app.get("/countries", async (req, res) => {
    let countries = await Country.findAll();
    res.json({ countries });
  });

  //Get country by ID
  app.get("/countries/:id", async (req, res) => {
    let country = await Country.findByPk(req.params.id);
    res.json({ country });
  });

  // create a country
  app.post("/countries", async (req, res) => {
    let newCountry = await Country.create(req.body);
    res.json({ newCountry });
  });

  //update a country
  app.put("/countries/:id", async (req, res) => {
    let updatedCountry = await Country.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedCountry });
  });

  // delete a country
  app.delete("/countries/:id", jwtCheck, async (req, res) => {
    await Country.destroy({ where: { id: req.params.id } });
    res.send(Country ? "Country deleted" : "Country delition failed!");
  });

  //---------------------Routes for Language ---------------------------------------

  //Get all language
  app.get("/languages", async (req, res) => {
    let languages = await Language.findAll();
    res.json({ languages });
  });

  //Get language by ID
  app.get("/languages/:id", async (req, res) => {
    let language = await Languages.findByPk(req.params.id);
    res.json({ language });
  });

  // create a language
  app.post("/languages", async (req, res) => {
    let newLanguage = await Language.create(req.body);
    res.json({ newLanguage });
  });

  //update a language
  app.put("/languages/:id", async (req, res) => {
    let updatedLanguage = await Language.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedLanguage });
  });

  // delete a language
  app.delete("/languages/:id", jwtCheck, async (req, res) => {
    await Language.destroy({ where: { id: req.params.id } });
    res.send(Language ? "language deleted" : "language delition failed!");
  });

  //---------------------Routes for Music ---------------------------------------

  //Get all music
  app.get("/musics", async (req, res) => {
    let musics = await Music.findAll();
    res.json({ musics });
  });

  //Get music by ID
  app.get("/musics/:id", async (req, res) => {
    let music = await Music.findByPk(req.params.id);
    res.json({ music });
  });

  // create a music
  app.post("/musics", async (req, res) => {
    let newMusic = await Music.create(req.body);
    res.json({ newMusic });
  });

  //update a music
  app.put("/musics/:id", async (req, res) => {
    let updatedMusic = await Music.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedMusic });
  });

  // delete a music
  app.delete("/musics/:id", jwtCheck, async (req, res) => {
    await Music.destroy({ where: { id: req.params.id } });
    res.send(Music ? "music deleted" : "music delition failed!");
  });

  //---------------------Routes for traditionalFood ---------------------------------------
  //Get all traditionalFoods
  app.get("/traditionalFoods", async (req, res) => {
    let traditionalFoods = await TraditionalFood.findAll();
    res.json({ traditionalFoods });
  });

  //Get traditionalFood by ID
  app.get("/traditionalFoods/:id", async (req, res) => {
    let traditionalFood = await TraditionalFood.findByPk(req.params.id);
    res.json({ traditionalFood });
  });

  // create a traditionalFood
  app.post("/traditionalFoods", async (req, res) => {
    let newTraditionalFood = await TraditionalFood.create(req.body);
    res.json({ newTraditionalFood });
  });

  //update a traditionalFood
  app.put("/traditionalFoods/:id", async (req, res) => {
    let updatedTraditionalFood = await TraditionalFood.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedTraditionalFood });
  });

  // delete a traditionalFood
  app.delete("/traditionalFoods/:id", jwtCheck, async (req, res) => {
    await TraditionalFood.destroy({ where: { id: req.params.id } });
    res.send(
      TraditionalFood
        ? "traditionalFood deleted"
        : "traditionalFood delition failed!"
    );
  });

  //---------------------Routes for touristAttraction ---------------------------------------

  //Get all touristAttraction
  app.get("/touristAttractions", async (req, res) => {
    let touristAttractions = await TouristAttraction.findAll();
    res.json({ touristAttractions });
  });

  //Get touristAttraction by ID
  app.get("/touristAttractions/:id", async (req, res) => {
    let touristAttraction = await TouristAttraction.findByPk(req.params.id);
    res.json({ touristAttraction });
  });

  // create a touristAttraction
  app.post("/touristAttractions", async (req, res) => {
    let newTouristAttraction = await TouristAttraction.create(req.body);
    res.json({ newTouristAttraction });
  });

  //update a touristAttraction
  app.put("/touristAttractions/:id", async (req, res) => {
    let updatedTouristAttraction = await TouristAttraction.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedTouristAttraction });
  });

  // delete a touristAttraction
  app.delete("/touristAttractions/:id", jwtCheck, async (req, res) => {
    await TouristAttraction.destroy({ where: { id: req.params.id } });
    res.send(
      TouristAttraction
        ? "touristAttraction deleted"
        : "touristAttraction delition failed!"
    );
  });

  //---------------------Routes for currency ---------------------------------------

  //Get all currency
  app.get("/currencies", async (req, res) => {
    let currencies = await Currency.findAll();
    res.json({ currencies });
  });

  //Get currencies by ID
  app.get("/currencies/:id", async (req, res) => {
    let currency = await Currency.findByPk(req.params.id);
    res.json({ currency });
  });

  // create a currencies
  app.post("/currencies", async (req, res) => {
    let newCurrency = await Currency.create(req.body);
    res.json({ newCurrency });
  });

  //update a currencies
  app.put("/currencies/:id", async (req, res) => {
    let updatedCurrency = await Currency.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ updatedCurrency });
  });

  // delete a currencies
  app.delete("/currencies/:id", jwtCheck, async (req, res) => {
    await Currency.destroy({ where: { id: req.params.id } });
    res.send(Currency ? "currency deleted" : "currency delition failed!");
  });

  //---------------------Routes for User ---------------------------------------

  // read all users
  app.get("/users", jwtCheck, async (req, res) => {
    let users = await User.findAll();
    res.json({ users });
  });

  // read one user by id
  app.get("/users/:id", jwtCheck, async (req, res) => {
    let user = await User.findByPk(req.params.id);
    res.json({ user });
  });

  // create user
  app.post("/users", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = await User.create({ userName: name, userPassword: hash });
      console.log(hash);
      res.json({ newUser });
    });
  });

  //---------------------Routes ---------------------------------------

  
  //---------------------Routes ---------------------------------------

  app.get("/continents/:continentId/countries", async (req, res) => {
    console.log(req.params)
    let myContinent = await Continent.findByPk(req.params.continentId);
    let countries = await Country.findAll();
    res.json({ myContinent, countries });
  });

  app.get("/continents/:continentId/countries/:countryId", async (req, res) => {
    console.log(req.params)
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    res.json({ myContinent, myCountry });
  });

    // create a country
    app.post("/continents/:continentId/countries", async (req, res) => {
      let newCountry = await Country.create(req.body);
      res.json({ newCountry });
    });
  
    //update a country
    app.put("/continents/:continentId/countries/:countryId", async (req, res) => {
      let updatedCountry = await Country.update(req.body, {
        where: { id: req.params.countryId },
      });
      res.json({ updatedCountry });
    });
  
    // delete a country
    app.delete("/continents/:continentId/countries/:countryId", jwtCheck, async (req, res) => {
      await Country.destroy({ where: { id: req.params.countryId } });
      res.send(Country ? "Country deleted" : "Country deletion failed!");
    });
  

  app.get("/continents/:continentId/countries/:countryId/musics", async (req, res) => {
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let musics = await Music.findAll();
    res.json({ myContinent, myCountry, musics });
  });

    //Get country and music by ID
    app.get("/continents/:continentId/countries/:countryId/musics/:musicId", async (req, res) => {
      console.log(req.params)
      let myContinent = await Continent.findByPk(req.params.continentId);
      let myCountry = await Country.findByPk(req.params.countryId);
      let myMusic = await Music.findByPk(req.params.musicId);
      res.json({ myContinent, myCountry, myMusic });
    });

    app.post("/continents/:continentId/countries/:countryId/musics", async (req, res) => {
      let newMusic = await Music.create(req.body);
      res.json({ newMusic });
    });
  
    //update a music
    app.put("/continents/:continentId/countries/:countryId/musics/:musicId", async (req, res) => {
      let updatedMusic = await Music.update(req.body, {
        where: { id: req.params.musicId },
      });
      res.json({ updatedMusic });
    });
  
    // delete a music
    app.delete("/continents/:continentId/countries/:countryId/musics/:musicId", jwtCheck, async (req, res) => {
      await Music.destroy({ where: { id: req.params.musicId } });
      res.send(Music ? "music deleted" : "music deletion failed!");
    });

    app.get("/continents/:continentId/countries/:countryId/languages", async (req, res) => {
      let myContinent = await Continent.findByPk(req.params.continentId);
      let myCountry = await Country.findByPk(req.params.countryId);
      let languages = await Language.findAll();
      res.json({ myContinent, myCountry, languages });
    });

  //Get country and Language by ID
  app.get("/continents/:continentId/countries/:countryId/languages/:languageId", async (req, res) => {
    console.log(req.params)
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let myLanguage = await Language.findByPk(req.params.languageId);
    res.json({ myContinent, myCountry, myLanguage });
  });

 // create a language
 app.post("/continents/:continentId/countries/:countryId/languages", async (req, res) => {
  let newLanguage = await Language.create(req.body);
  res.json({ newLanguage });
});

//update a language
app.put("/continents/:continentId/countries/:countryId/languages/:languageId", async (req, res) => {
  let updatedLanguage = await Language.update(req.body, {
    where: { id: req.params.languageId },
  });
  res.json({ updatedLanguage });
});

// delete a language
app.delete("/continents/:continentId/countries/:countryId/languages/:languageId", jwtCheck, async (req, res) => {
  await Language.destroy({ where: { id: req.params.languageId } });
  res.send(Language ? "language deleted" : "language deletion failed!");
});

  app.get("/continents/:continentId/countries/:countryId/traditionalFoods", async (req, res) => {
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let traditionalFoods = await TraditionalFood.findAll();
    res.json({ myContinent, myCountry, traditionalFoods });
  });

  //Get country and traditionalFoods by ID
  app.get(
    "/continents/:continentId/countries/:countryId/traditionalFoods/:traditionalFoodId",
    async (req, res) => {
      let myContinent = await Continent.findByPk(req.params.continentId);
      let myCountry = await Country.findByPk(req.params.countryId);
      let myTraditionalFood = await TraditionalFood.findByPk(req.params.traditionalFoodId);
      res.json({ myContinent, myCountry, myTraditionalFood });
    }
  );

    // create a traditionalFood
    app.post("/continents/:continentId/countries/:countryId/traditionalFoods", async (req, res) => {
      let newTraditionalFood = await TraditionalFood.create(req.body);
      res.json({ newTraditionalFood });
    });
  
    //update a traditionalFood
    app.put("/continents/:continentId/countries/:countryId/traditionalFoods/:traditionalFoodId", async (req, res) => {
      let updatedTraditionalFood = await TraditionalFood.update(req.body, {
        where: { id: req.params.traditionalFoodId },
      });
      res.json({ updatedTraditionalFood });
    });
  
    // delete a traditionalFood
    app.delete("/continents/:continentId/countries/:countryId/traditionalFoods/:traditionalFoodId", jwtCheck, async (req, res) => {
      await TraditionalFood.destroy({ where: { id: req.params.traditionalFoodId } });
      res.send(
        TraditionalFood
          ? "traditionalFood deleted"
          : "traditionalFood deletion failed!"
      );
    });

  app.get("/continents/:continentId/countries/:countryId/touristAttractions", async (req, res) => {
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let touristAttractions = await TouristAttraction.findAll();
    res.json({ myContinent, myCountry, touristAttractions });
  });

  //Get country and touristAttractions by ID
  app.get(
    "/continents/:continentId/countries/:countryId/touristAttractions/:touristAttractionId",
    async (req, res) => {
      let myContinent = await Continent.findByPk(req.params.continentId);
      let myCountry = await Country.findByPk(req.params.countryId);
      let myTouristAttractions = await TouristAttraction.findByPk(
        req.params.touristAttractionId
      );
      res.json({ myContinent, myCountry, myTouristAttractions });
    }
  );

   // create a touristAttraction
   app.post("/continents/:continentId/countries/:countryId/touristAttractions", async (req, res) => {
    let newTouristAttraction = await TouristAttraction.create(req.body);
    res.json({ newTouristAttraction });
  });

  //update a touristAttraction
  app.put("/continents/:continentId/countries/:countryId/touristAttractions/:touristAttractionId", async (req, res) => {
    let updatedTouristAttraction = await TouristAttraction.update(req.body, {
      where: { id: req.params.touristAttractionId },
    });
    res.json({ updatedTouristAttraction });
  });

  // delete a touristAttraction
  app.delete("/continents/:continentId/countries/:countryId/touristAttractions/:touristAttractionId", jwtCheck, async (req, res) => {
    await TouristAttraction.destroy({ where: { id: req.params.touristAttractionId } });
    res.send(
      TouristAttraction
        ? "touristAttraction deleted"
        : "touristAttraction deletion failed!"
    );
  });

  app.get("/continents/:continentId/countries/:countryId/currencies", async (req, res) => {
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let currencies = await Currency.findAll();
    res.json({ myContinent, myCountry, currencies });
  });


  //Get country and currency by ID
  app.get("/continents/:continentId/countries/:countryId/currencies/:currencyId", async (req, res) => {
    let myContinent = await Continent.findByPk(req.params.continentId);
    let myCountry = await Country.findByPk(req.params.countryId);
    let myCurrency = await Currency.findByPk(req.params.currencyId);
    res.json({ myContinent, myCountry, myCurrency });
  });

    // create a currencies
    app.post("/continents/:continentId/countries/:countryId/currencies", async (req, res) => {
      let newCurrency = await Currency.create(req.body);
      res.json({ newCurrency });
    });
  
    //update a currencies
    app.put("/continents/:continentId/countries/:countryId/currencies/:currencyId", async (req, res) => {
      let updatedCurrency = await Currency.update(req.body, {
        where: { id: req.params.currencyId },
      });
      res.json({ updatedCurrency });
    });
  
    // delete a currencies
    app.delete("/continents/:continentId/countries/:countryId/currencies/:currencyId", jwtCheck, async (req, res) => {
      await Currency.destroy({ where: { id: req.params.currencyId } });
      res.send(Currency ? "currency deleted" : "currency deletion failed!");
    });

  //   app
  //     .route("/country")
  //     .get((req, res) => res.send("Get request successful!"))

  //     .post((req, res) => res.send("Post request successful!"));

  //   app
  //     .route("/country/:countryID")
  //     .put((req, res) => res.send("Put request successful!"))

  //     .delete((req, res) => res.send("Delete request successful!"));

  //   app.get("/", (req, res) => {
  //     res.send(`Node and express server running on port ${PORT}`);
  //   });
};

module.exports = routes;
