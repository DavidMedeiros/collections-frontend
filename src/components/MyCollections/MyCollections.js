import React, { Component } from 'react';

import {Header, Grid, Loader, Icon} from 'semantic-ui-react';

import NewCollectionModal from "./NewCollectionModal/NewCollectionModal";
import CollectionsList from "./CollectionsList/CollectionsList";

import API from '../../api';

import './MyCollections.scss'

class MyCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };

    this.loadUserCollections = this.loadUserCollections.bind(this);
  }

  handleNewCollection = createdCollection => {
    this.setState((state) => ({
      collections: state.collections.concat(createdCollection)
    }));
  };

  loadUserCollections() {
    this.props.user._collections.forEach(collectionId => {
      API
        .get('/api/collection/' + collectionId)
        .then(response => {
          const collection = response.data;

          this.setState((state) => ({
            collections: state.collections.concat(collection)
          }));

          if (this.state.collections.length === this.props.user._collections.length) {
            this.setState({ isLoaded: true });
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              localStorage.clear();
              window.location.replace('/');
            }
          }
        });
    });
  }

  componentDidMount() {
    if (this.props.user._collections.length < 1) {
      this.setState({ isLoaded: true });
    } else {
      this.loadUserCollections();
    }
  }

  render() {
    let collectionsContent;

    if (this.state.isLoaded) {
      if (this.state.collections.length > 0) {
        collectionsContent = (
          <Grid.Row>
            <CollectionsList collections={this.state.collections}/>
          </Grid.Row>
        );
      } else {
        collectionsContent = (
          <div>
            <Grid.Row>
              <Header color='pink' size='tiny'>
                <Icon name='times circle outline' />
                <Header.Content>
                  Você ainda não possui coleções
                  <Header.Subheader>Crie uma nova clicando no botão <i>Nova Coleção</i>  acima </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Row> </div>
        );
      }
    } else {
      collectionsContent = (
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
              <Header.Subheader>
                Explore as suas coleções, adicione novos itens e compartilhe com seus amigos
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>

        <Grid.Column width={4}>
          <NewCollectionModal onChange={this.handleNewCollection}/>
        </Grid.Column>
        { collectionsContent }
      </Grid>
    );
  }
}

export default MyCollections;
