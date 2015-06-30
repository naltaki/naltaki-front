import React  from 'react';
import moment from 'moment';
import CityMapperLink from './CityMapperLink';

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
        <div className="lead clearfix">
          <div className="left">
            <span>{moment(this.props.event.startAt).format('MMMM Do YYYY, h:mma')} · </span>
            <a href={this.props.event.venueLink} target="_blank">{this.props.event.venueName}</a>
          </div>
          <div className="right">
            <button className="btn">
              RSVP
              <span className="counter" style={{marginLeft: '3px'}}>{this.props.event.guests.length}</span>
            </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
        <CityMapperLink
          name={this.props.event.venueName}
          coordinates={this.props.event.venueGeoLocation}
          address={this.props.event.venueAddress}
        />
      </div>
    );
  }
}
