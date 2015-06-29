import React from 'react/addons';
import NextEvent from './NextEvent';
import UpcomingEvents from './UpcomingEvents';
import PreviousEvents from './PreviousEvents';

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
        <NextEvent event={null} />
        <UpcomingEvents events={[]} />
        <PreviousEvents events={[]} />
        <br />
      </div>
    );
  }
}
