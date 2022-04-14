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
        : "traditionalFood deletion failed!"
    );
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