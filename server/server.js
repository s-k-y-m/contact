const express = require("express");
const app = express();
const db = require("../database/pushToDatabase.js");

app.use(express.static("public"));

app.get("/restaurants/:id", (request, response) => {
  db.Restaurant.find({ name: request.params.id }, (err, data) => {
    if (err) {
      console.log("Error", err);
    }
    response.send(data[0]);
  });
});

app.listen(3005, () => {
  console.log("Listening on port 3005");
});
