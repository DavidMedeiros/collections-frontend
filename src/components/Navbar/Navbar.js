import React, { Component } from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../resources/logo.png'

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

    this.state = {
      activeItem: location
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

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
            as={Link} to={'/'}
          >
            <Icon name='home'/> Página Inicial
          </Menu.Item>

          <Menu.Item
            name='analysis' color='pink'
            active={activeItem === 'analysis'}
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
            as={Link} to={'/analysis'}
          >
            <Icon name='pie graph'/> Análises
          </Menu.Item>

          <Menu.Item
            name='explore' color='pink'
            active={activeItem === 'explore'}
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
            as={Link} to={'/songs'}
          >
            <Icon name='sound'/> Explorar Sons
          </Menu.Item>

          <Menu.Item
            name='sign-in' color='pink'
            position='right'
            onClick={this.handleItemClick} style={{paddingBottom: 20 + 'px'}}
            as={Link} to={'/logout'}
          >
            Sair
          </Menu.Item>
        </Container>

      </Menu>
    );
  }
}

export default withRouter(Navbar);


