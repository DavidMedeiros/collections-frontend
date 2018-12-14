import React, { Component } from 'react';

import { Tab, Grid } from 'semantic-ui-react';

import FollowingUsersContainer from '../../FollowingUsers/FollowingUsersContainer';
import MyCollections from "../../MyCollections/MyCollections";

import './TabsMenu.scss';

class TabsMenu extends Component {

  render() {
    const panes = [
      { menuItem: 'Minhas Colecoes', render: () =>
          <Tab.Pane className='myCollections' attached={true}><MyCollections user={ this.props.user } /></Tab.Pane>
      },
      { menuItem: 'Seguindo', render: () =>
          <Tab.Pane className='followingUsers' attached={true}><FollowingUsersContainer /></Tab.Pane>
      },
      { menuItem: 'Seguidores', render: () =>
          <Tab.Pane attached={true}>Work in Progress</Tab.Pane>
      },
    ];

    return (
      <Grid columns='equal'>
        <Grid.Row className='tabContainer' centered>
          <Grid.Column>
            <Tab className='tabMenu' menu={{ color: 'pink',secondary: true, pointing: true }} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TabsMenu;


