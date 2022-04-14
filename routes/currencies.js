 
 
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
    res.send(Currency ? "currency deleted" : "currency deletion failed!");
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