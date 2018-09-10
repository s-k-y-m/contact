const express = require('express');
const app = express();
const db = require('../database/pushToDatabase.js');

app.use(express.static('public'));

app.get('/restaurants/name', (request, response) => {
  console.log('GET REQUEST RECEIVED');
  db.Restaurant.find({ name: 'Hilll Group' }, (err, data) => {
    if (err) {
      console.log('Error', err);
    }
    response.send(data[0]);
  });
});

app.listen(3005, () => {
  console.log('Listening on port 3005');
});
