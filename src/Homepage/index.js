import React          from 'react';
import NextEvent      from './NextEvent';
import UpcomingEvents from './UpcomingEvents';
import PreviousEvents from './PreviousEvents';
import ParseComponent from 'parse-react/class';

export default class Homepage extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    return {
      events: new Parse.Query('Events')
    };
  }

  render() {

    return (
      <div className="three-fourths column markdown-body">
        <blockquote>
          <p>{this.props.description}</p>
        </blockquote>
        <NextEvent event={this.data.events[0]} />
        <UpcomingEvents events={this.data.events} />
        <PreviousEvents events={this.data.events} />
        <br />
      </div>
    );
  }
}
