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