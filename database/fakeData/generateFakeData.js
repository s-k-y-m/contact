const faker = require('faker');
const fs = require('fs');

var restaurants = [];

for (var i = 0; i < 100; i++) {
  // Contact Module
  var streetAddress = faker.address.streetAddress();
  var city = faker.address.city();
  var state = faker.address.stateAbbr();
  var zipCode = faker.address.zipCode();
  var country = faker.address.country();

  var companyName = faker.company.companyName();
  var address = `${streetAddress}, ${city}, ${state} ${zipCode}, ${country} `;
  var phoneNumber = faker.phone.phoneNumber();
  var website = faker.internet.url();
  var getDirectionsURL =
    'https://www.google.com/maps/dir//37.776208,-122.4382592/@37.7761828,-122.5082486,12z';
  var streetViewLink =
    'https://www.google.com/maps/@37.7761963,-122.4382348,0a,104.2y,-77.74h,80.62t/data=!3m4!1e1!3m2!1sAF1QipOz-PL_7FJDu2cb4sM9QK9rHb0w9J-jER6gukKJ!2e10?source=apiv3';
  var openNow = {
    monday: '10:30 AM - 10:00 PM',
    tuesday: '10:30 AM - 10:00 PM',
    wednesday: '10:30 AM - 10:00 PM',
    thursday: '10:30 AM - 10:00 PM',
    friday: '10:30 AM - 10:00 PM',
    saturday: '10:30 AM - 11:00 PM',
    sunday: '10:30 AM - 10:00 PM'
  };

  // Review Module
  var reviews = [];

  for (var j = 0; j < 5; j++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var fullName = `${firstName} ${lastName}`;

    var image = faker.image.avatar();
    var starRating = Math.floor(Math.random() * (6 - 1) + 1);
    var date = faker.date.recent();
    var text = faker.lorem.paragraph();

    var review = {
      image: image,
      name: fullName,
      date: date,
      starRating: starRating,
      review: text
    };

    reviews.push(review);
  }

  var restaurant = {
    name: companyName,
    address: address,
    phoneNumber: phoneNumber,
    websiteURL: website,
    getDirectionsURL: getDirectionsURL,
    streetViewLink: streetViewLink,
    openNow: openNow,
    reviews: reviews
  };
  restaurants.push(restaurant);
}

fs.writeFile('./restaurants', JSON.stringify(restaurants), (err, data) => {
  if (err) {
    console.log('Err', err);
  }
  console.log('Files written');
});

console.log('RESTAURANTS', restaurants);
