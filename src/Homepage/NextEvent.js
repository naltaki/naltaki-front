import React from 'react/addons';
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
            <span>{moment(new Date(this.props.event.attributes.startAt)).format('MMMM Do YYYY, h:mma')} · </span>
            <a href={this.props.event.attributes.venueLink} target="_blank">{this.props.event.attributes.venueName}</a>
          </div>
          <div className="right">
            <button className="btn">
              RSVP
              <span className="counter" style={{marginLeft: '3px'}}>{this.props.event.attributes.guests.length}</span>
            </button>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.event.attributes.description}} />
        <CityMapperLink
          name={this.props.event.attributes.venueName}
          coordinates={this.props.event.attributes.venueGeoLocation}
          address={this.props.event.attributes.venueAddress}
        />
      </div>
    );
  }
}
