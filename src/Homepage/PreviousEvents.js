import React from 'react/addons';
import moment from 'moment';

export default class PreviousEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  renderEventItem(item, index) {
    return (
      <li key={index}>
        <span>{moment(item.attributes.startAt).format('MMMM, Do YYYY')} · </span>
        <a href={item.attributes.venueLink} target="_blank">{item.attributes.venueName}</a>
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
        <h2>Previous events</h2>
        <ul>
          {this.props.events.map(this.renderEventItem)}
        </ul>
        <br />
      </div>
    );
  }
}
