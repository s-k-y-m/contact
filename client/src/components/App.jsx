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
      <div>
        <VelocityComponent
          animation={{ rotateZ: this.state.expanded ? 0 : -180 }}
          duration={500}
        >
          <h1 className="logo" onClick={this.handleToggle.bind(this)}>
            Zagat
          </h1>
        </VelocityComponent>
        <div className="main-container">
          <p className="placeHolderText placeholder">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
            odio. Praesent convallis urna a lacus interdum ut hendrerit risus
            congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
            ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla
            congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
            dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
            ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
            auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
            ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
            interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
            ligula, facilisis sed ornare eu, lobortis in odio. Praesent
            convallis urna a lacus interdum ut hendrerit risus congue. Nunc
            sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at
            libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
            dui eget tellus gravida venenatis. Integer fringilla congue eros non
            fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
            purus. Mauris quis diam velit.
          </p>
          <ContactInfo className="contactInfo" restaurant={restaurant} />
        </div>
        <div className="div">
          AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaecenas
          nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus
          vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare
          eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
          dictum interdum, nisi lorem egestas odio, vitae scelerisque enim
          ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
          auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
          ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent
          convallis urna a lacus interdum ut hendrerit risus congue. Nunc
          sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
          sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
          tellus gravida venenatis. Integer fringilla congue eros non fermentum.
          Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit.
        </div>
      </div>
    );
  }
}

export default App;
