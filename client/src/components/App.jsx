import React from "react";
import ContactInfo from "./ContactInfo.jsx";
import axios from "axios";
import { VelocityComponent } from "velocity-react";
import styles from "../styles/app.css";

var fakeData = require("../../../database/fakeData/fakeRestaurants.js");
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
      .get("http://localhost:3005/restaurants/Hilll Group")
      .then(data => {
        restaurant = data.data;
        this.setState({
          restaurant: restaurant
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  handleToggle() {
    console.log("H1 toggled");
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { restaurant } = this.state;
    return (
      <div>
        <div className={styles.mainContainer}>
          {/* <p className={`${styles.placeHolderText} ${styles.placeholder}`} /> */}
          <ContactInfo className={styles.contactInfo} restaurant={restaurant} />
        </div>
        <div className={styles.div} />
      </div>
    );
  }
}

export default App;
