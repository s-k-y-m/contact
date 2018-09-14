import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalModalExample = props => (
  <Modal
    className="modal"
    trigger={
      <Button className="expandButton">
        <div className="expandMap">
          <span className="expandMapText">Expand Map</span>
          <svg
            viewBox="0 0 24 24"
            version="1.1"
            height="24px"
            width="24px"
            className="expandSvg"
          >
            <rect id="Rectangle-3" fill-opacity="0" fill="#FFFFFF" />
            <polyline
              id="arrow-list"
              transform="translate(7.506097, 15.991378) rotate(-315.000000) translate(-7.506097, -15.991378) "
              points="6.9607807 18.4408494 2.76277313 14.2364261 2.00609665 14.9941547 7.49539852 20.491378 13.0060967 14.9724391 12.249131 14.2152897 8.03030547 18.4408494 8.03030547 11.491378 6.9607807 11.491378 6.9607807 18.4408494"
            />
            <polygon
              id="arrow-list-copy"
              transform="translate(15.991378, 7.506097) rotate(-315.000000) translate(-15.991378, -7.506097) "
              points="20.7347015 9.26104855 21.491378 8.50332003 16.0020762 3.00609665 10.491378 8.5250356 11.2483436 9.28218503 15.4671692 5.05662525 15.4671692 12.0060967 16.536694 12.0060967 16.536694 5.05662525"
            />
          </svg>
        </div>
      </Button>
    }
  >
    <Modal.Header className="mapTitle">{props.name}</Modal.Header>
    <Modal.Content className="modalContent" image>
      <Modal.Description>
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          >
            <a href="https://www.maps.ie/create-google-map/">Get Directions</a>
          </iframe>
        </div>
        <Button
          href="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;"
          className="modalButton"
        >
          Get Directions
        </Button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalModalExample;
