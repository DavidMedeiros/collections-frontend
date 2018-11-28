import React, { Component } from 'react';

import {Container, Grid, Icon, Statistic, Popup, Label, Card } from 'semantic-ui-react'

import CollectionHeader from "./CollectionHeader/CollectionHeader";
import './Collection.scss'
import AlbumCard from "./AlbumCard/AlbumCard";

class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genres: ['lala'],
      albums: [{
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNumber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNumber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNumber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNumber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      }]
    };

    // this.handleGenres = this.handleGenres.bind(this);
  }

  // handleGenres() {
  //   this.state.albums.forEach(function(album){
  //     let genres = album.genres;
  //     genres.forEach(function (genre) {
  //       console.log(this.state.genres);
  //       // if(!this.state.genres.includes(genre)) {
  //       //   let newGenres = this.state.genres.push(genre);
  //       //
  //       //   this.setState({genres: newGenres});
  //       // }
  //     })
  //   });
  // }

  render() {

    return (
      <div>
        <CollectionHeader />
        <Container>
          <Grid columns='equal'>
            <Grid.Row className='collectionContainer' centered>
              <Grid.Column>
                <Label>
                  Pop
                </Label>
                <Label>
                  Rock
                </Label>
                <Label>
                  Disco
                </Label>
                <Label>
                  90's
                </Label>
                <Label>
                  Classic Rock
                </Label>
              </Grid.Column>
              <Grid.Column>
                <div align="right">
                  <Popup
                    trigger={
                      <Statistic  color='grey' size='mini'>
                        <Statistic.Value className='statisticCollection'>
                          <Icon name='dot circle' />
                          53
                        </Statistic.Value>
                      </Statistic>
                    }
                    content="Itens na coleção"
                  />
                  <Popup
                    trigger={
                      <Statistic color='grey' size='mini'>
                        <Statistic.Value className='statisticCollection'>
                          <Icon name='heart' />
                          10
                        </Statistic.Value >
                      </Statistic>
                    }
                    content="Curtidas"
                  />
                  <Popup
                    trigger={
                      <Statistic color='grey' size='mini'>
                        <Statistic.Value className='statisticCollection'>
                          <Icon name='users' />
                          10
                        </Statistic.Value>
                      </Statistic>
                    }
                    content="Seguidores"
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
  }
}

export default Collection;
