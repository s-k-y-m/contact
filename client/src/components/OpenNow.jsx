import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { VelocityComponent } from 'velocity-react';
import styles from '../styles/styles.css';

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
      <div className={styles.schedule} onClick={this.handleToggle.bind(this)}>
        <div id="Monday" className={currentDay === 'Monday' ? styles.bold : ''}>
          Monday.........................
          {monday}
        </div>
        <div
          id="Tuesday"
          className={currentDay === 'Tuesday' ? styles.bold : ''}
        >
          Tuesday.........................
          {tuesday}
        </div>
        <div
          id="Wednesday"
          className={currentDay === 'Wednesday' ? styles.bold : ''}
        >
          Wednesday.........................
          {wednesday}
        </div>
        <div
          id="Thursday"
          className={currentDay === 'Thursday' ? styles.bold : ''}
        >
          Thursday.........................
          {thursday}
        </div>
        <div id="Friday" className={currentDay === 'Friday' ? styles.bold : ''}>
          Friday.........................
          {friday}
        </div>
        <div
          id="Saturday"
          className={currentDay === 'Saturday' ? styles.bold : ''}
        >
          Saturday.........................
          {saturday}
        </div>
        <div id="Sunday" className={currentDay === 'Sunday' ? styles.bold : ''}>
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
      <div className={styles.wholeSchedule}>
        <div
          className={styles.oneDaySchedule}
          onClick={this.handleToggle.bind(this)}
        >
          <div>
            <span className={`${styles.openNowOneLine}  ${styles.inline}`}>
              Open Now
            </span>
            <span className={styles.inline}>
              {this.props.times[currentDay.toLowerCase()]}
            </span>
            <span className={styles.chevron}>
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
