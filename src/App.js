import React from 'react/addons';
import Header from './Header';
import TwitterSidebar from './widgets/TwitterSidebar';
import Homepage from './Homepage';
import CodeOfConduct from './CodeOfConduct';
import Contact from './Contact';

// <CodeOfConduct />
// <Contact formLink={this.props.config.formContact} />
// <Homepage description={this.props.config.description} />

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
            <Homepage description={this.props.config.description} />
          </div>
        </div>
      </section>
    );
  }
}
