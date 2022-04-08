const express = require("express");
const routes = require("./routes/wcRoutes");

const app = express();
const PORT = 3000;

routes(app);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
