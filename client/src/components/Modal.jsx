import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalModalExample = () => (
  <Modal trigger={<Button>Expand Map</Button>}>
    <Modal.Header>Map Image</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Restaurant Name</Header>
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          >
            <a href="https://www.maps.ie/create-google-map/">Get Directions</a>
          </iframe>
        </div>
        <div class="ui button">
          <a href="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;">
            Neutral
          </a>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
