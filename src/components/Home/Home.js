import React, { Component } from 'react';

import {Container, Loader} from 'semantic-ui-react'

import UserHeader from "./UserHeader/UserHeader";
import TabsMenu from "./TabsMenu/TabsMenu";
import Welcome from "./Welcome/Welcome";
import API from "../../api";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null, isUserLoaded: false };
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }

  getLoggedUser() {
    API.get('/api/auth')
      .then(response => {
        if (response.status === 200) {
          if (response.data.status) {
            this.setState({user: response.data.user, isUserLoaded: true});
          }
        }
      });
  }

  render() {
    if (this.props.userLogged && this.state.user == null) {
      this.getLoggedUser();
    }

    if (this.props.userLogged) {
      if (this.state.isUserLoaded) {
        return (
          <div>
            <UserHeader user={this.state.user}/>
            <Container>
              <TabsMenu user={this.state.user}/>
            </Container>
          </div>
        );
      } else {
        return (
          <div className='loading'>
            <Loader active>Carregando a sua página inicial</Loader>
          </div>
        );
      }
    } else {
      return (
        <Welcome/>
      );
    }
  }
}

export default Home;
