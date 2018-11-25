import React, { Component } from 'react';
import { Card, Header, Grid, Loader } from 'semantic-ui-react';
import CollectionCard from '../CollectionCard/CollectionCard'
import NewCollectionModal from "../NewCollectionModal/NewCollectionModal";
import API from '../../api';
import './MyCollectionsContainer.scss'
import axios from 'axios'

class MyCollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      collections: []
    };
  }

  componentDidMount() {
    const credentials = {username: "david", password: "123456"};

    // fetch('http://localhost:3030/api/auth', {
    //   method: 'post',
    //   body: {
    //     "username": "user",
    //     "password": "123456"
    //   }
    // });

    axios
      .post('http://localhost:3030/api/auth', {
        username: "user",
        password: "123456"
      })
      .then(response => {
        console.log('login response: ');
        console.log(response);
        if (response.status === 200) {
          console.log('pocpoc');
        }
      }).catch(error => {
      console.log('login error: ');
      console.log(error);
    });


    // API.post('login', credentials)
    //   .then(res => {
    //     console.log(res.session);
    //     API.get('collection')
    //       .then(res => {
    //         const collections = res.data;
    //         this.setState({ collections, isLoaded: true });
    //
    //       });
    //   });





  }

  render() {
    let content;

    if (this.state.isLoaded) {
      content = (
        <Card.Group itemsPerRow={this.state.collections.length < 4 ? (this.state.collections.length) : (4)}>
          {this.state.collections.map(collection => (
            <CollectionCard key={collection._id} image={collection.image} name={collection.name} description={collection.description} itemsAmount={collection._items.length} likesAmount={collection._likes.length}  followersAmount={collection._followers.length} />
          ))}
        </Card.Group>
      );
    } else {
      content = (
        <div className='loading'>
          <Loader active>Elfos estão trazendo as suas coleções, pode levar alguns segundos</Loader>
        </div>
      );
    }

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
          { content }
        </Grid.Row>
      </Grid>
    );
  }
}

export default MyCollectionsContainer;
