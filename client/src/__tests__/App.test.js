import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';

describe('Component rendering', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains('Zagat')).toBe(true);
  });

  it('should be selectable by class "foo"', function() {
    expect(shallow(<App />).is('.main-container')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.main-container').length).toBe(1);
  });
});
