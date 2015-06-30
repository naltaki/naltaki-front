import React    from 'react';
import NavMenu  from './NavMenu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navMenu;

    if (this.props.config.headerMenuLinks.length > 0) {
      navMenu = <NavMenu links={this.props.config.headerMenuLinks} />
    }

    return (
      <header className="masthead" style={{backgroundColor: '#4C5664'}}>
        <div className="container">
          <a href={this.props.config.rootUrl} className="masthead-logo">{this.props.config.name}</a>
          {navMenu}
        </div>
      </header>
    );
  }
}
