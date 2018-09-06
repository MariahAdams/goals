import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
// import styles from './Credentials.css';
// TODO: allowName, Form CSS

class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    // allowName: PropTypes.bool
  };

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    console.log('HERE');
    e.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  };
  
  render() { 
    const { action } = this.props;
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>

        <FormControl label="name">
          <input name="name" value={name} onChange={this.handleChange} required></input>
        </FormControl>
        
        <FormControl label="email">
          <input name="email" type="email" pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
  [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/" value={email} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl label="password">
          <input name="password" type="password" value={password} onChange={this.handleChange} required></input>
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>

      </form>
    );
  }
}
 
export default Credentials;