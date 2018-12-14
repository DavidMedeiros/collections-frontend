import React, { Component } from 'react';

import { Menu, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

import NewUserModal from "../../NewUserModal/NewUserModal";
import API from "../../../api";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username.trim(),
      password: this.state.password,
    };

    API.post('/api/auth', user)
      .then(response => {
        if (response.status === 200) {
          const { onLogged } = this.props;
          onLogged(response.data.msg);
        }
      }).catch(error => {
      console.log('new user error: ');
      console.log(error);
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Menu.Item position='right'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Username' name='username' size='mini'
                        onChange={ this.handleInputChange } value={ this.state.username } />
            <Form.Input placeholder='Senha' type='password' name='password' size='mini'
                        onChange={ this.handleInputChange } value={ this.state.password } />
            <Form.Button content='Entrar' type='submit' color='pink' size='mini' />
          </Form.Group>
        </Form>
        <NewUserModal />
      </Menu.Item>
    );
  }
}

export default withRouter(Login);


