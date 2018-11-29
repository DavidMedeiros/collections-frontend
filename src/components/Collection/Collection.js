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
      isLoaded: false,
      collection: [],
      genres: ['lala'],
      albums: [{
        "_id": '1',
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNuffsasdmber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "_id": '2',
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNgsuaaamber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "_id": '3',
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artistIdNfuasddmber",
        "genres": [
          "pop",
          "rock",
          "dance"
        ],
        "image": "https://shop.pbs.org/ccstore/v1/images/?source=/file/v4490040077353843221/products/TBLG452.0.jpg&height=940&width=940",
        "copyright": "Interscope 2011c"
      },{
        "_id": '4',
        "name": "Born This Way",
        "released_date": "Sat Dec 16 2011 10:15:20 GMT-0300",
        "released_type": "album",
        "artist_id": "artigstIdasdNumber",
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

  componentWillMount() {
    axios
      .get('/api/collection/' + this.props.match.params.collectionId )
      .then(response => {
        const collection = response.data;
        console.log(collection);
        this.setState({ collection: collection, isLoaded: true });
      });
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

    if (this.state.isLoaded) {
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
