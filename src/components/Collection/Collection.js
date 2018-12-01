import React, { Component } from 'react';

import { Container, Grid, Label, Loader } from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import AlbumsList from "./AlbumsList/AlbumsList";
import CollectionStatistic from "./CollectionStatistic/CollectionStatistic";

import axios from "axios";

import './Collection.scss'

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionLoaded: false,
      albumsLoaded: false,
      collection: [],
      genres: ['Pop', 'Rock', 'Disco', 'Eletronic'],
      albums: []
    };

    this.loadCollection = this.loadCollection.bind(this);
    this.loadAlbums = this.loadAlbums.bind(this);
  }

  componentWillMount() {
    this.loadCollection()
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

  render() {
    if (this.state.collectionLoaded) {
      return (
        <div>
          <CollectionHeader name={ this.state.collection.name } description={ this.state.collection.description }
                            image={ this.state.collection.image }/>

          <Container>
            <Grid columns='equal'>
              <Grid.Row className='collectionContainer' centered>
                <Grid.Column>
                  { this.state.genres.map(genre => (
                    <Label key={ genre } className='genreLabel'>
                      { genre }
                    </Label>
                  )) }
                </Grid.Column>

                <CollectionStatistic collection={ this.state.collection } />
              </Grid.Row>

              <Grid.Row className='containerContent'>
                <div className='cardAlbumList'>
                  <hr/>
                  <AlbumsList albumsLoaded={ this.state.albumsLoaded } albums={ this.state.albums }/>
                </div>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      );
    } else {
      return (
        <div className='loading'>
          <Loader active>A sua coleção está sendo carregada, pode levar alguns segundos! *arhhg elfos...* </Loader>
        </div>
      );
    }
  }
}

export default Collection;
