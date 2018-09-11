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

    // if (this.state.toggled === true) {
    return (
      <div className="wholeSchedule">
        <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
          <div>
            <span className="openNowOneLine">Open Now</span>{' '}
            {this.props.times[currentDay.toLowerCase()]}
            <div className="chevron">
              <VelocityComponent
                animation={{ rotateZ: this.state.expanded ? 180 : 0 }}
                duration={500}
              >
                <FaChevronDown />
              </VelocityComponent>
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
    // } else {
    //   return (
    //     <div className="oneDaySchedule" onClick={this.handleToggle.bind(this)}>
    //       <div>
    //         <span className="openNowOneLine">Open Now</span>{' '}
    //         {this.props.times[currentDay.toLowerCase()]}
    //         <div className="chevronDown">
    //           <VelocityComponent
    //             animation={{ rotateZ: this.state.expanded ? 0 : -180 }}
    //             duration={500}
    //           >
    //             <FaChevronDown />
    //           </VelocityComponent>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

export default OpenNow;
