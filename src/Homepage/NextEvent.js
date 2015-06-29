import React from 'react/addons';
import moment from 'moment';

export default class NextEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.event) {
      return (
        <div>
          <br />
          <p className="lead">There are no upcoming events for now. Stay tune !</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Next event</h1>
        <p className="lead clearfix">
          <span className="left">
            <span>{moment(this.props.event.attributes.startAt).format('MMMM Do YYYY, h:mma')} · </span>
            <a href={this.props.event.attributes.venueLink} target="_blank">{this.props.event.attributes.venueName}</a>
          </span>
          <span className="right">
              <button className="btn btn-primary btn-sm btn-with-count">
                RSVP
              </button>
              <span className="social-count">{this.props.event.attributes.guests.length}</span>
          </span>
        </p>
        <br />
        {this.props.event.attributes.description}
      </div>
    );
  }
}
