import React, { Component } from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import './Navbar.scss'
import logo from '../../resources/logo.png'

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className='headerMenu' pointing secondary  >
        <Container>
          <Menu.Item>
            <Image src={logo} size='small' />
          </Menu.Item>

          <Menu.Item
            name='home' color='pink'
            active={activeItem === 'home'}
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
          >
            <Icon name='home'   /> Página Inicial
          </Menu.Item>

          <Menu.Item
            name='analysis' color='pink'
            active={activeItem === 'analysis'}
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
          >
            <Icon name='pie graph' /> Análises
          </Menu.Item>

          <Menu.Item
            name='explore' color='pink'
            active={activeItem === 'explore'}
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
          >
            <Icon name='sound' /> Explorar Sons
          </Menu.Item>

          <Menu.Item
            name='sign-in' color='pink'
            position='right'
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
          >
            Sair
          </Menu.Item>
        </Container>

      </Menu>
    );
  }
}

export default Navbar;


