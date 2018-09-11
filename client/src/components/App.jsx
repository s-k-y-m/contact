import React from 'react';
import ContactInfo from './ContactInfo.jsx';
import axios from 'axios';

var fakeData = require('../../../database/fakeData/fakeRestaurants.js');
var restaurant = fakeData.oneRestaurant;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: restaurant
    };
  }
  componentDidMount() {
    var restaurant;
    axios
      .get('http://localhost:3005/restaurants/name')
      .then(data => {
        restaurant = data.data;
        console.log('Restaurant', restaurant);
        this.setState({
          restaurant: restaurant
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
  render() {
    const { restaurant } = this.state;
    return (
      <div className="main-container">
        <h1 className="logo">Zagat</h1>
        <div className="placeholder" />
        <ContactInfo restaurant={restaurant} />
      </div>
    );
  }
}

export default App;
