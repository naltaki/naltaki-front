import React from 'react/addons';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
      <div className="three-fourths column markdown-body">
        <iframe src={this.props.formLink} width="760" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        <br />
      </div>
    );
  }
}
