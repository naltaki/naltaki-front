import React from 'react/addons';
import Header from './Header';
import TwitterSidebar from './TwitterSidebar';

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
          </div>
        </div>
      </section>
    );
  }
}
