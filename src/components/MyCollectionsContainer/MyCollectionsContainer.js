import React, { Component } from 'react';
import { Card, Header, Grid } from 'semantic-ui-react';
import CollectionCard from '../CollectionCard/CollectionCard'
import './MyCollectionsContainer.scss'
import NewCollectionModal from "../NewCollectionModal/NewCollectionModal";


class MyCollectionsContainer extends Component {
  render() {
    const collections = [
      {
        "description": "My pop divas albums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf199290002b2532937e146",
        "name": "Pop Divas",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      },
      {
        "description": "My old disco albums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf199340002b2532937e147",
        "name": "Old Disco",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      },
      {
        "description": "My classic jazz albums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf199410002b2532937e148",
        "name": "Classic Jazz",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      },
      {
        "description": "My rock albums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf1994d0002b2532937er149",
        "name": "Rock",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      },
      {
        "description": "My rock alddddddddddddbums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf1994d00302b2532937e149",
        "name": "Rock",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      },
      {
        "description": "My rock albums collection",
        "_items": [],
        "_followers": [],
        "_likes": [],
        "_id": "5bf1994d0002b2532937e1349",
        "name": "Rock",
        "_owner": "5bf198f30002b2532937e145",
        "__v": 0
      }
    ];

    return (
      <Grid>
        <Grid.Column width={12}>
          <Header as='h1' >
            <Header.Content > Minhas Coleções
              <Header.Subheader>Explore as suas coleções, adicone novos itens e compartilhe com seus amigos </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <NewCollectionModal />
        </Grid.Column>

        <Grid.Row>
          {collections.length < 4 ? (
            <Card.Group itemsPerRow={collections.length}>
              {collections.map(collection => (
                <CollectionCard key={collection._id} image='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg' name={collection.name} description={collection.description} itemsAmount={collection._items.length} likesAmount={collection._likes.length}  followersAmount={collection._followers.length} />
              ))}
            </Card.Group>
          ) : (
            <Card.Group itemsPerRow={4}>
              {collections.map(collection => (
                <CollectionCard key={collection._id} image='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg' name={collection.name} description={collection.description} itemsAmount={collection._items.length} likesAmount={collection._likes.length}  followersAmount={collection._followers.length} />
              ))}
            </Card.Group>
          )}
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyCollectionsContainer;


