import React from 'react';

export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit     = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  handleChange(event) {
    const newState            = {};
    newState[event.target.id] = event.target.value;

    this.setState(newState);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="three-fourths column markdown-body large-on-small-device">
        <h2>Join our group</h2>
        <form onSubmit={this.onSubmit}>
          <dl className="form">
            <dt className="input-label">
              <label for="username">Username</label>
            </dt>
            <dd>
              <input
                id="username"
                size="30"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <p className="note">My name is YOLO</p>
            </dd>
          </dl>

          <dl className="form">
            <dt className="input-label">
              <label for="email">Email Address</label>
            </dt>
            <dd>
              <input id="email" size="30" type="email" />
              <p className="note">We promise not to share your email with anyone.</p>
            </dd>
          </dl>

          <dl className="form">
            <dt className="input-label">
              <label for="password">Password</label>
            </dt>
            <dd>
              <input id="password" size="30" type="password" />
              <p className="note">Make it harder for hackers</p>
            </dd>
          </dl>

          <dl className="form">
            <dt className="input-label">
              <label for="passwordConfirmation">Confirm your password</label>
            </dt>
            <dd>
              <input id="passwordConfirmation" size="30" type="password" />
              <p className="note">Be sure to not write it too quickly to remember it</p>
            </dd>
          </dl>

          <div className="form-user-actions">
            <input type="submit" className="btn btn-primary" value="Create an account" />
          </div>
        </form>
        <br />
      </div>
    );
  }
}
