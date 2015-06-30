import React  from  'react';
import moment from  'moment';

export default class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEventItem(item, index) {
    return (
      <li key={index}>
        <span>{moment(item.startAt).format('MMMM, Do YYYY')} · </span>
        <a href={item.venueLink} target="_blank">{item.venueName}</a>
      </li>
    );
  }

  render() {

    if (!this.props.events || !this.props.events.length) {
      return (
        <div />
      );
    }

    return (
      <div>
        <br />
        <h2>Upcoming events</h2>
        <ul>
          {this.props.events.map(this.renderEventItem)}
        </ul>
      </div>
    );
  }
}
