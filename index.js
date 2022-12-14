const express = require("express");
const { json } = require("express");
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
// const flights = require('./flight.json')
// const fs = require('fs')

const app = express();

app.use(json());

app.use("/flight", routes);

app.get('/', (req, res) => {
  res.send("welcome")
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
