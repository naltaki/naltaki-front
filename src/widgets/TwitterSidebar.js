import React from 'react/addons';

export default class TwitterSidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const BASE_URL = 'https://twitter.com/';

    return (
      <div className="one-fourth column">
        <a className="twitter-timeline" href={BASE_URL + this.props.config.twitter_username} data-widget-id={this.props.config.twitterWidgetId}>
          Tweets by @{this.props.config.twitterUsername}
        </a>
        &nbsp;
      </div>
    );
  }
}