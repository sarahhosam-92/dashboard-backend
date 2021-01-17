const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes/user.routes")(app);
require("./app/routes/employee.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});