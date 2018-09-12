import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

var axios = require('axios');

const pageUrl = 'http://localhost:3005/restaurants/name';

describe('Snapshot testing', () => {
  it('should render correctly', () => {
    const output = shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Component rendering', function() {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains('Zagat')).toBe(true);
  });

  it('should be selectable by class "main container"', () => {
    expect(shallow(<App />).is('.main-container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.main-container').length).toBe(1);
  });
});

describe('api call receiving data', () => {
  test('the data is a restaurant', () => {
    axios
      .get(pageUrl)
      .then(data => {
        restaurant = data.data;
        expect(restaurant.name).toBe('Hilll Group');
      })
      .catch(err => {
        console.log('Error', err);
      });
  });
});
