import React from 'react';

export default class TwitterSidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const BASE_URL = 'https://twitter.com/';

    return (
      <div className="one-fourth column hidden-on-small-device">
        <a className="twitter-timeline" href={BASE_URL + this.props.config.twitter_username} data-widget-id={this.props.config.twitterWidgetId}>
          Tweets by @{this.props.config.twitterUsername}
        </a>
        &nbsp;
      </div>
    );
  }
}
