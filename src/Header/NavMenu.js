import React from 'react/addons';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavItem(item, index) {
    if (item.link[0] === '/') {
      return <a href={item.link} key={index}>{item.name}</a>
    }
    
    return <a href={item.link} key={index} target="_blank">{item.name}</a>
  }

  render() {
    return (
      <nav className="masthead-nav">
        {this.props.links.map(this.renderNavItem)}
      </nav>
    );
  }
}
