import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import './UserHeader.scss'

class UserHeader extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row className='userHeader' centered>
          <Grid.Column>
            <Image src='https://pbs.twimg.com/profile_images/1059257985355124736/cfwKNOq7_400x400.jpg'
                   size='small' circular centered/>
            <Header as='h2' textAlign='center'>
              <Header.Content > David Souza
                <Header.Subheader>@davinthechaos</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserHeader;


