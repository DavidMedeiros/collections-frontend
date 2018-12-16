import React, { Component } from 'react';

import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import logo from '../../resources/logo.png'
import Login from "./Login";
import API from "../../api";

import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props);

    let location = "";
    if (props.location.pathname === "/") {
      location = "home";
    } else if (props.location.pathname === "/analysis") {
      location = "analysis";
    } else if (props.location.pathname === "/explore") {
      location = "explore";
    }

    this.state = { activeItem: location };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  logout = () => {
    API.delete('/api/auth')
      .then(response => {
        if (response.status === 200) {
          localStorage.clear();
          window.location.replace('/');
        }
      });
  };

  handleLogin = loggedUser => {
    const { login } = this.props;
    login(loggedUser === 'Login successful!');
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu className='headerMenu' pointing secondary  >
        <Container>
          <Menu.Item>
            <Image src={logo} size='small' as={Link} to={'/'}  />
          </Menu.Item>

          { this.props.userLogged && <div className='userLoggedNavbar'>
            <Menu.Item name='home' color='pink' active={activeItem === 'home'} onClick={this.handleItemClick}
                       style={{paddingBottom: 20 + 'px'}} as={Link} to={'/'} >
              <Icon name='home'/> Página Inicial
            </Menu.Item>

            <Menu.Item name='analysis' color='pink' active={activeItem === 'analysis'} onClick={this.handleItemClick}
                       style={{paddingBottom: 20 + 'px'}} as={Link} to={'/analysis'}>
              <Icon name='pie graph'/> Análises
            </Menu.Item>

            <Menu.Item name='explore' color='pink' active={activeItem === 'explore'} onClick={this.handleItemClick}
                       style={{paddingBottom: 20 + 'px'}} as={Link} to={'/songs'}>
              <Icon name='sound'/> Explorar Sons
            </Menu.Item>
          </div> }

          { this.props.userLogged &&
          <Menu.Item name='sign-in' color='pink'position='right'
                     style={{paddingBottom: 20 + 'px'}} onClick={this.logout}> Sair </Menu.Item> }

          { !this.props.userLogged && <div className='userNotLoggedNavbar'>
            <Login onLogged={ this.handleLogin }/>
          </div> }

        </Container>

      </Menu>
    );
  }
}

export default withRouter(Navbar);


