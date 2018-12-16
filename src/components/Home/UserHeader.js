import React, { Component } from 'react';

import { Header, Grid, Image } from 'semantic-ui-react';

import './UserHeader.scss';

class UserHeader extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row className='userHeader' centered>
         <Grid.Column>
            <Image src={this.props.user.image}
                   size='small' circular centered/>
            <Header as='h2' textAlign='center'>
              <Header.Content > {this.props.user.name}
                <Header.Subheader>{this.props.user.username}</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserHeader;


