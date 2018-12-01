import React, { Component } from 'react';

import {Container, Grid, Icon, Statistic, Popup, Label, Card, Loader} from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import './Collection.scss'
import AlbumCard from "./AlbumCard/AlbumCard";
import axios from "axios";

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collectionLoaded: false,
      albumsLoaded: false,
      collection: [],
      genres: ['lala'],
      albums: []
    };

    this.loadAlbums = this.loadAlbums.bind(this);
  }

  loadAlbums(){
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

  componentWillMount() {
    axios
      .get('/api/collection/' + this.props.match.params.collectionId )
      .then(response => {
        const collection = response.data;
        this.setState({ collection: collection, collectionLoaded: true });
        this.loadAlbums();
      });
  }

  render() {
    if (this.state.collectionLoaded && this.state.albumsLoaded) {
      return (
        <div>
          <CollectionHeader name={this.state.collection.name} description={this.state.collection.description} image={this.state.collection.image}/>
          <Container>
            <Grid columns='equal'>
              <Grid.Row className='collectionContainer' centered>
                <Grid.Column>
                  <Label className='genreLabel'>
                    Pop
                  </Label>
                  <Label className='genreLabel'>
                    Rock
                  </Label>
                  <Label className='genreLabel'>
                    Disco
                  </Label>
                  <Label className='genreLabel'>
                    90's
                  </Label>
                  <Label className='genreLabel'>
                    Classic Rock
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <div align="right">
                    <Popup
                      trigger={
                        <Statistic  color='grey' size='mini'>
                          <Statistic.Value className='statisticCollection'>
                            <Icon className='iconBefore' name='dot circle' />
                            {this.state.collection._items.length}
                          </Statistic.Value>
                        </Statistic>
                      }
                      content= { this.state.collection._items.length + ' Itens na coleção' }
                    />
                    <Popup
                      trigger={
                        <Statistic color='grey' size='mini'>
                          <Statistic.Value className='statisticCollection'>
                            <Icon className='iconBefore' name='heart' />
                            {this.state.collection._likes.length}
                          </Statistic.Value >
                        </Statistic>
                      }
                      content= {this.state.collection._likes.length + ' Curtidas' }
                    />
                    <Popup
                      trigger={
                        <Statistic color='grey' size='mini'>
                          <Statistic.Value className='statisticCollection'>
                            <Icon className='iconBefore' name='users' />
                            {this.state.collection._followers.length}
                          </Statistic.Value>
                        </Statistic>
                      }
                      content= {this.state.collection._followers.length + ' Seguidores' }
                    />

                  </div>


                </Grid.Column>

              </Grid.Row>



              <Grid.Row className='containerContent'>

                <div className='cardAlbumList'>
                  <hr/>
                  <Container style={{padding: 15 + 'px'}}>
                    <Card.Group itemsPerRow={this.state.albums.length < 7 ? (this.state.albums.length) : (7)}>
                      {this.state.albums.map(album => (
                        <AlbumCard key={album._id} image={album.image} name={album.name}
                                   releasedYear={new Date(album.released_date).getUTCFullYear()} />
                      ))}
                    </Card.Group>
                  </Container>

                </div>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
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

export default Collection;
