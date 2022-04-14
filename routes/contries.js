const {
  Continent,
  Country
} = require("../models/index");
  
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
    console.log(req.params);
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
    res.send(Country ? "Country deleted" : "Country deletion failed!");
  });

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
