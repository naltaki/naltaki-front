import React            from 'react';
import { RouteHandler } from 'react-router';
import Header           from './Header';
import TwitterSidebar   from './widgets/TwitterSidebar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Header config={this.props.config} />
        <div className="container">
          <div className="columns">
            <TwitterSidebar config={this.props.config} />
            <RouteHandler config={this.props.config} />
          </div>
        </div>
      </section>
    );
  }
}
