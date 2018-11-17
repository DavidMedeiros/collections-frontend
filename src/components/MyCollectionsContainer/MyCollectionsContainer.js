import React, { Component } from 'react';
import { Card, Modal, Header, Grid, Button } from 'semantic-ui-react';
import CollectionCard from '../CollectionCard/CollectionCard'
import './MyCollectionsContainer.scss'
import NewCollectionModal from "../NewCollectionModal/NewCollectionModal";


class MyCollectionsContainer extends Component {
  render() {
    const poc = (<Card.Group itemsPerRow={4}>
      <CollectionCard image='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg' name='Minha Coleção de Coisas Legais' description='this is the manifesto of mather monster hahahaha' itemsAmount='20' likesAmount='10' followersAmount='5'/>
      <CollectionCard image='http://assets.papelpop.com/wp-content/uploads/2016/10/marina.jpg' name='Minha Coleção de Coisas Legais' description='this is the manifesto of mather monster hahahaha' itemsAmount='20' likesAmount='10' followersAmount='5'/>
      <CollectionCard image='https://vignette.wikia.nocookie.net/ffooff/images/c/cd/Sissy_That_Walk.jpg/revision/latest?cb=20170828202646' name='Minha Coleção de Coisas Legais' description='this is the manifesto of mather monster hahahaha' itemsAmount='20' likesAmount='10' followersAmount='5'/>
      <CollectionCard image='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg' name='Minha Coleção de Coisas Legais' description='this is the manifesto of mather monster hahahaha' itemsAmount='20' likesAmount='10' followersAmount='5'/>
      <CollectionCard image='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg' name='Minha Coleção de Coisas Legais' description='this is the manifesto of mather monster hahahaha' itemsAmount='20' likesAmount='10' followersAmount='5'/>
    </Card.Group>);

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

        <Grid.Row> {poc}</Grid.Row>
      </Grid>

       // {poc}
    );
  }
}

export default MyCollectionsContainer;


