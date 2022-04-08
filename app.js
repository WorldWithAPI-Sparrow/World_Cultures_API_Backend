const express = require("express");
const routes = require("./routes/wcRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
