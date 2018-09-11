import React from 'react';

class OpenNow extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false
    };
  }

  handleToggle() {
    console.log('Toggled');
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
        <div className="schedule" onClick={this.handleToggle.bind(this)}>
          <div className="Monday">
            Monday.........................
            {monday}
          </div>
          <div className="Tuesday">
            Tuesday.........................
            {tuesday}
          </div>
          <div className="Wednesday">
            Wednesday.........................
            {wednesday}
          </div>
          <div className="Thursday">
            Thursday.........................
            {thursday}
          </div>
          <div className="Friday">
            Friday.........................
            {friday}
          </div>
          <div className="Saturday">
            Saturday.........................
            {saturday}
          </div>
          <div className="Sunday">
            Sunday.........................
            {sunday}
          </div>
        </div>
      );
    } else {
      return (
        <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
          <div>
            <span className="openNowOneLine">Open Now</span>{' '}
            {this.props.times[currentDay.toLowerCase()]}
          </div>
        </div>
      );
    }
  }
}

export default OpenNow;
