import React, { Component } from 'react';

import {Dropdown, Container, Grid, Loader} from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import AlbumsList from "./AlbumsList/AlbumsList";
import CollectionStatistic from "./CollectionStatistic/CollectionStatistic";
import SearchAlbums from "./SearchAlbums/SearchAlbums";

import axios from "axios";

import './Collection.scss'

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = { collectionLoaded: false, albumsLoaded: false, collection: [], albums: [], searchByName: true };

    this.loadCollection = this.loadCollection.bind(this);
    this.loadAlbums = this.loadAlbums.bind(this);
  }

  componentWillMount() {
    this.loadCollection();
  }

  loadCollection() {
    axios
      .get('/api/collection/' + this.props.match.params.collectionId)
      .then(response => {
        const collection = response.data;

        this.setState({ collection: collection, collectionLoaded: true });

        if (collection._items.length < 1) {
          this.setState({ albumsLoaded: true });
        } else {
          this.loadAlbums();
        }
      });
  }

  loadAlbums() {
    this.state.collection._items.forEach(albumId => {
      axios
        .get('/api/album/' + albumId)
        .then(response => {
          const album = response.data;

          this.setState((state) => ({
            albums: state.albums.concat(album)
          }));

          if (this.state.albums.length === this.state.collection._items.length) {
            this.setState({ albumsLoaded: true });
          }
        });
    });
  }

  handleSearchOption = (e, { value }) => {
    if (value === 'name') {
      this.setState({ searchByName: true });
    } else {
      this.setState({ searchByName: false });
    }
  };

  handleAddAlbum = albumId => {
    const url = '/api/collection/' + this.state.collection._id + '/album';
    const data = { "album_id": albumId };

    axios
      .put(url, data)
      .then(response => {
        this.setState((state) => ({
          albums: state.albums.concat(response.data.album)
        }));
      });
  };

  render() {
    const { collectionLoaded, collection, searchByName, albumsLoaded, albums } = this.state;

    if (collectionLoaded) {
      return (
        <div>
          <CollectionHeader name={ collection.name }
                            description={ collection.description }
                            image={ collection.image }/>

          <Container>
            <Grid columns='equal'>
              <Grid.Row className='collectionContainer' centered>

                <Grid.Column width={8}>
                  <SearchAlbums searchByName={ searchByName } onChange={ this.handleAddAlbum }/>
                </Grid.Column>

                <Grid.Column width={4}>

                  <Dropdown>
                    <Dropdown.Menu>
                      <Dropdown.Header icon='search' content='Opções de busca' />
                      <Dropdown.Divider />
                      <Dropdown.Item active={ searchByName } onClick={this.handleSearchOption} value='name' text='Nome do Album' />
                      <Dropdown.Item active={ !searchByName } onClick={this.handleSearchOption} value='artist' text='Albums do Artista' />
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>

                <Grid.Column width={4}>
                <CollectionStatistic collection={ collection } itensAmount={ albums.length }/>
                </Grid.Column>

              </Grid.Row>


              <Grid.Row className='containerContent'>
                <div className='cardAlbumList'>
                  <AlbumsList albumsLoaded={ albumsLoaded } albums={ albums }/>
                </div>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      );
    } else {
      return (
        <div className='loading'>
          <Loader active>A sua coleção está sendo carregada, pode levar alguns segundos! *arhhg elfos...*</Loader>
        </div>
      );
    }
  }
}

export default Collection;
