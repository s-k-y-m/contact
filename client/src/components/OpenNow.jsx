import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { VelocityComponent } from 'velocity-react';

class OpenNow extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
      expanded: false
    };
  }

  handleToggle() {
    this.setState({
      toggled: !this.state.toggled,
      expanded: !this.state.toggled
    });
  }

  showSchedule() {
    let {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    } = this.props.times;
    return (
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
    );
  }

  render() {
    let {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    } = this.props.times;

    const currentDay = this.props.currentDay;

    return (
      <div className="wholeSchedule">
        <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
          <div>
            <span className="openNowOneLine inline">Open Now</span>{' '}
            <span className="inline">
              {this.props.times[currentDay.toLowerCase()]}
            </span>
            <span className="inline">
              <VelocityComponent
                animation={{ rotateZ: this.state.expanded ? -180 : 0 }}
                duration={200}
              >
                <FaChevronDown />
              </VelocityComponent>
            </span>
          </div>
        </div>
        {this.state.toggled === true ? this.showSchedule() : null}
      </div>
    );
  }
}

export default OpenNow;
