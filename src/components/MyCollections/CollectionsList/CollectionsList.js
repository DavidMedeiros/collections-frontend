import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import CollectionCard from '../CollectionCard/CollectionCard'

class CollectionsList extends Component {
  render() {
    return(
      <Card.Group style={{paddingLeft: 15 + 'px'}}
                  itemsPerRow={this.props.collections.length < 4 ? (this.props.collections.length) : (4)}>
        {this.props.collections.map(collection => (
          <CollectionCard key={collection._id}
                          image={collection.image} name={collection.name} description={collection.description}
                          itemsAmount={collection._items.length} likesAmount={collection._likes.length}
                          followersAmount={collection._followers.length} link={'/collection/' + collection._id} />
        ))}
      </Card.Group>
    );
  }
}

export default CollectionsList;
