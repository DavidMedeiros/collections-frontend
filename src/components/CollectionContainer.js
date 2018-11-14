import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import CollectionCard from './CollectionCard'


class CollectionContainer extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={4}>
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </Card.Group>
    );
  }
}

export default CollectionContainer;


