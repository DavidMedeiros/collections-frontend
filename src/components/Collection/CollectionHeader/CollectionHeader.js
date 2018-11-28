import React, { Component } from 'react';
import {Header, Grid, Container} from 'semantic-ui-react';
import './CollectionHeader.scss'

class CollectionHeader extends Component {
  render() {
    return (
      <Grid style={{ backgroundImage: `url(${this.props.image})` }} className='collectionHeader'>
        <Grid.Row columns={3}>
          <div className='collectionHeaderContainer'>
            <Container>
              <Grid.Column >
                <Header as='h1'>
                  <Header.Content> { this.props.name }
                    <Header.Subheader>{ this.props.description }</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
            </Container>
          </div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default CollectionHeader;


