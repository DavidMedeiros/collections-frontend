import React, { Component } from 'react';
import { Card, Loader } from 'semantic-ui-react';
import CollectionCard from '../CollectionCard/CollectionCard'
import './CollectionsList.scss'
import axios from 'axios'

class CollectionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      collections: []
    };
  }

  componentWillMount() {
    if(this.props.collectionsIds) {
      // Reuse this component to load following collections
      // Request a colection from collectionid and put it in collections list to exhibe
    } else {
      axios
        .get('/api/collection')
        .then(response => {
          const collections = response.data;
          this.setState({ collections, isLoaded: true });
        });
    }
  }

  render() {
    console.log('filho', this.props.teste);
    if (this.state.isLoaded) {
      return(
        <Card.Group style={{paddingLeft: 15 + 'px'}} itemsPerRow={this.state.collections.length < 4 ? (this.state.collections.length) : (4)}>
          {this.state.collections.map(collection => (
            <CollectionCard key={collection._id}
                            image={collection.image} name={collection.name} description={collection.description}
                            itemsAmount={collection._items.length} likesAmount={collection._likes.length}
                            followersAmount={collection._followers.length} link={'/collection/' + collection._id} />
          ))}
        </Card.Group>
      );
    } else {
      return (
        <div className='loading'>
          <Loader active>Elfos estão trazendo as suas coleções, pode levar alguns segundos</Loader>
        </div>
      );
    }
  }
}

export default CollectionsList;
