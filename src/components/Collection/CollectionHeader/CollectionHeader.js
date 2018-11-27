import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import './CollectionHeader.scss'

class CollectionHeader extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Row className='collectionHeader' centered>
          <Grid.Column>
            <Header as='h1' textAlign='center'>
              <Header.Content > 90's Collection
                <Header.Subheader>@davinthechaos</Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CollectionHeader;


