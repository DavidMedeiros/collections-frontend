import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'

import UserHeader from "./UserHeader/UserHeader";
import TabsMenu from "./TabsMenu/TabsMenu";
import Welcome from "./Welcome/Welcome";

class Home extends Component {
  render() {
    console.log(this.props.userLogged);

    if (this.props.userLogged) {
      return (
        <div>
          <UserHeader />
          <Container>
            <TabsMenu />
          </Container>
        </div>
      );
    } else {
      return (
        <Welcome/>
      );
    }

  }
}

export default Home;
