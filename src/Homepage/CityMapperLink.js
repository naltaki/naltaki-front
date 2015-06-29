import React from 'react/addons';

export default class CityMapperLink extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const cityMapperLink = `http://citymapper.com/directions?endcoord=${this.props.coordinates.latitude},${this.props.coordinates.longitude}&endname=${this.props.name}&endaddress=${this.props.address}`;

    return (
      <a href={cityMapperLink} target="_blank">
          <img src="https://static.citymapper.com/img/embed/GetMeThere_Citymapper.png" alt="Get directions with Citymapper" />
      </a>
    );
  }
}
