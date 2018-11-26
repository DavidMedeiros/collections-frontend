import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'

import UserHeader from "./UserHeader/UserHeader";
import TabsMenu from "./TabsMenu/TabsMenu";

class Home extends Component {
  render() {
    return (
      <div>
        <UserHeader />
        <Container>
          <TabsMenu />
        </Container>
      </div>
    );
  }
}

export default Home;
