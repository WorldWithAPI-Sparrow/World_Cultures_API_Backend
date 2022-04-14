const continents = (app) => {
  const { Continent } = require("../models/continent");

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
};

module.exports = continents;
