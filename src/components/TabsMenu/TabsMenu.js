import React, { Component } from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import MyCollectionContainer from '../MyCollectionsContainer/MyCollectionsContainer'
import FollowingUsersContainer from '../FollowingUsersContainer/FollowingUsersContainer'
import './TabsMenu.scss'

class TabsMenu extends Component {

  render() {
    const panes = [
      { menuItem: 'Minhas Colecoes', render: () => <Tab.Pane className='myCollections' attached={true}><MyCollectionContainer /></Tab.Pane> },
      { menuItem: 'Seguindo Usuários', render: () => <Tab.Pane className='followingUsers' attached={true}><FollowingUsersContainer /></Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane attached={true}>Tab 3 Content</Tab.Pane> },
    ];

    return (
      <Grid columns='equal'>
        <Grid.Row className='container' centered>
          <Grid.Column>
            <Tab className='tabMenu' menu={{ color: 'pink',secondary: true, pointing: true }} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TabsMenu;


