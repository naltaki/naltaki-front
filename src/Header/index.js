import React from 'react/addons';
import NavMenu from './NavMenu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navMenu;

    if (this.props.config.header_menu_links.length > 0) {
      navMenu = <NavMenu config={this.props.config} />
    }

    return (
      <header className="masthead" style={{backgroundColor: '#4C5664'}}>
        <div className="container">
          <a href="/" className="masthead-logo">{this.props.config.title}</a>
          {navMenu}
        </div>
      </header>
    );
  }
}
