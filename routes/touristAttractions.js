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