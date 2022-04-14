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
    res.send(Language ? "language deleted" : "language deletion failed!");
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