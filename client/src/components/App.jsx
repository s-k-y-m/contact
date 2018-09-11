import React from 'react';
import ContactInfo from './ContactInfo.jsx';
import axios from 'axios';
import { VelocityComponent } from 'velocity-react';

var fakeData = require('../../../database/fakeData/fakeRestaurants.js');
var restaurant = fakeData.oneRestaurant;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: restaurant,
      expanded: true
    };
  }

  componentDidMount() {
    var restaurant;
    axios
      .get('http://localhost:3005/restaurants/name')
      .then(data => {
        restaurant = data.data;
        this.setState({
          restaurant: restaurant
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  handleToggle() {
    console.log('H1 toggled');
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { restaurant } = this.state;
    return (
      <div className="main-container">
        <VelocityComponent
          animation={{ rotateZ: this.state.expanded ? 0 : -180 }}
          duration={500}
        >
          <h1 className="logo" onClick={this.handleToggle.bind(this)}>
            Zagat
          </h1>
        </VelocityComponent>
        <div className="placeholder" />
        <ContactInfo restaurant={restaurant} />
      </div>
    );
  }
}

export default App;
