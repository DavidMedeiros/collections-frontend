import React, { Component } from 'react';

import {Container, Grid } from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import './Collection.scss'

class Collection extends Component {
  render() {
    return (
      <div>
        <CollectionHeader />
        <Container>
          <Grid columns='equal'>
              <Grid.Row className='collectionContainer' centered>
                  <Grid.Column>
                        <p>dffdf</p>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
         </Container>
      </div>
    );
  }
}

export default Collection;
