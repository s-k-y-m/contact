import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { VelocityComponent } from 'velocity-react';

class OpenNow extends React.Component {
  constructor(props) {
    super(props);
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

    let currentDay = this.props.currentDay;

    return (
      <div className="schedule" onClick={this.handleToggle.bind(this)}>
        <div id="Monday" className={currentDay === 'Monday' ? 'bold' : ''}>
          Monday.........................
          {monday}
        </div>
        <div id="Tuesday" className={currentDay === 'Tuesday' ? 'bold' : ''}>
          Tuesday.........................
          {tuesday}
        </div>
        <div
          id="Wednesday"
          className={currentDay === 'Wednesday' ? 'bold' : ''}
        >
          Wednesday.........................
          {wednesday}
        </div>
        <div id="Thursday" className={currentDay === 'Thursday' ? 'bold' : ''}>
          Thursday.........................
          {thursday}
        </div>
        <div id="Friday" className={currentDay === 'Friday' ? 'bold' : ''}>
          Friday.........................
          {friday}
        </div>
        <div id="Saturday" className={currentDay === 'Saturday' ? 'bold' : ''}>
          Saturday.........................
          {saturday}
        </div>
        <div id="Sunday" className={currentDay === 'Sunday' ? 'bold' : ''}>
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

    let currentDay = this.props.currentDay;

    return (
      <div className="wholeSchedule">
        <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
          <div>
            <span className="openNowOneLine inline">Open Now</span>{' '}
            <span className="inline">
              {this.props.times[currentDay.toLowerCase()]}
            </span>
            <span className="chevron">
              <VelocityComponent
                animation={{ rotateZ: this.state.expanded ? -180 : 0 }}
                duration={250}
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
