import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

class OpenNow extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  handleToggle() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    } = this.props.times;

    const currentDay = this.props.currentDay;

    if (this.state.toggled === true) {
      return (
        <div className="wholeSchedule">
          <div
            className="oneDaySchedule"
            onClick={this.handleToggle.bind(this)}
          >
            <div>
              <span className="openNowOneLine">Open Now</span>{' '}
              {this.props.times[currentDay.toLowerCase()]}
              <div>
                <FaChevronDown />
              </div>
            </div>
          </div>
          <div className="schedule" onClick={this.handleToggle.bind(this)}>
            <div id="Monday">
              Monday.........................
              {monday}
            </div>
            <div id="Tuesday">
              Tuesday.........................
              {tuesday}
            </div>
            <div id="Wednesday">
              Wednesday.........................
              {wednesday}
            </div>
            <div id="Thursday">
              Thursday.........................
              {thursday}
            </div>
            <div id="Friday">
              Friday.........................
              {friday}
            </div>
            <div id="Saturday">
              Saturday.........................
              {saturday}
            </div>
            <div id="Sunday">
              Sunday.........................
              {sunday}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
          <div>
            <span className="openNowOneLine">Open Now</span>{' '}
            {this.props.times[currentDay.toLowerCase()]}
            <div>
              <FaChevronDown />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default OpenNow;
