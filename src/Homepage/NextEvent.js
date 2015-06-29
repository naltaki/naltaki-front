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

    const cityMapperLink = `http://citymapper.com/directions?endcoord=${this.props.event.attributes.venueGeoLocation.latitude},${this.props.event.attributes.venueGeoLocation.longitude}&endname=${this.props.event.attributes.venueName}&endaddress=${this.props.event.attributes.venueAddress}`;

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
        <a href={cityMapperLink} target="_blank">
          <img src="https://static.citymapper.com/img/embed/GetMeThere_Citymapper.png" alt="Get directions with Citymapper" />
        </a>
      </div>
    );
  }
}
