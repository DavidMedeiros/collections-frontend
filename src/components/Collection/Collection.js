import React, { Component } from 'react';

import {Dropdown, Container, Grid, Loader} from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import AlbumsList from "./AlbumsList/AlbumsList";
import CollectionStatistic from "./CollectionStatistic/CollectionStatistic";
import SearchAlbums from "./SearchAlbums/SearchAlbums";

import API from '../../api';

import './Collection.scss'

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = { collectionLoaded: false, albumsLoaded: false, collection: [], albums: [], searchByName: true, user: null };

    this.loadCollection = this.loadCollection.bind(this);
    this.loadAlbums = this.loadAlbums.bind(this);
  }

  componentDidMount() {
    API.get('/api/auth')
      .then(response => {
        if (response.status === 200) {
          if (response.data.status) {
            this.setState({ user: response.data.user });
            this.loadCollection();
          } else {
            localStorage.clear();
            window.location.replace('/');
          }
        }
      });
  }

  loadCollection() {
    API
      .get('/api/collection/' + this.props.match.params.collectionId)
      .then(response => {
        if (response.data === null) {
          window.location.replace('/');
        }
        if (response.status === 200) {
          const collection = response.data;

          this.setState({collection: collection, collectionLoaded: true});

          if (collection._items.length < 1) {
            this.setState({albumsLoaded: true});
          } else {
            this.loadAlbums();
          }
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.clear();
            window.location.replace('/');
          } else if (error.response.status === 400) {
            window.location.replace('/');
          }
        }
      });
  }

  loadAlbums() {
    this.state.collection._items.forEach(albumId => {
      API
        .get('/api/album/' + albumId)
        .then(response => {
          if (response.status === 200) {

            const album = response.data;

            this.setState((state) => ({
              albums: state.albums.concat(album)
            }));

            if (this.state.albums.length === this.state.collection._items.length) {
              this.setState({ albumsLoaded: true });
            }
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

    API
      .put(url, data)
      .then(response => {
        if (response.status === 200) {
          this.setState((state) => ({
            albums: state.albums.concat(response.data.album)
          }));
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
  };

  render() {
    const { collectionLoaded, collection, searchByName, albumsLoaded, albums, user } = this.state;

    if (collectionLoaded) {
      return (
        <div>
          <CollectionHeader name={ collection.name } description={ collection.description } image={ collection.image }/>

          <Container>
            <Grid columns='equal'>
              <Grid.Row className='collectionContainer' centered>
                { user._id === collection._owner && <Grid.Column width={8}>
                  <SearchAlbums searchByName={ searchByName } onChange={ this.handleAddAlbum }/>
                </Grid.Column> }

                { user._id === collection._owner && <Grid.Column width={4}>
                  <Dropdown>
                    <Dropdown.Menu>
                      <Dropdown.Header icon='search' content='Opções de busca' />
                      <Dropdown.Divider />
                      <Dropdown.Item active={ searchByName } onClick={this.handleSearchOption}
                                     value='name' text='Nome do Album' />
                      <Dropdown.Item active={ !searchByName } onClick={this.handleSearchOption}
                                     value='artist' text='Albums do Artista' />
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column> }

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
