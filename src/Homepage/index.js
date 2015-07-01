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

    let eventsContent;

    if(this.pendingQueries().length !== 0) {
      eventsContent = <p>Loading...</p>
    } else {
      eventsContent = (
        <div>
          <NextEvent event={this.data.events[0]} />
          <UpcomingEvents events={this.data.events} />
          <PreviousEvents events={this.data.events} />
        </div>
      );
    }

    return (
      <div className="three-fourths column markdown-body">
        <blockquote>
          <p>{this.props.description}</p>
        </blockquote>
        {eventsContent}
        <br />
      </div>
    );
  }
}
