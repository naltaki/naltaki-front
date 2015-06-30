import React          from 'react';
import NextEvent      from './NextEvent';
import UpcomingEvents from './UpcomingEvents';
import PreviousEvents from './PreviousEvents';
import examples       from './examples';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="three-fourths column markdown-body">
        <blockquote>
          <p>{this.props.description}</p>
        </blockquote>
        <NextEvent event={examples[0]} />
        <UpcomingEvents events={examples} />
        <PreviousEvents events={examples} />
        <br />
      </div>
    );
  }
}
