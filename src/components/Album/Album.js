import React, { Component } from 'react';

import { Container, Grid, Loader, Image, Header, Label } from 'semantic-ui-react'

import TracksList from "./TracksList/TracksList";

import axios from "axios/index";

import './Album.scss'

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = { album: [], tracks: [], albumLoaded: false, tracksLoaded: false };
    this.loadAlbum = this.loadAlbum.bind(this);
  }

  componentWillMount() {
    this.loadAlbum();
  }

  loadAlbum() {
    axios
      .get('/api/album/' + this.props.match.params.albumId)
      .then(response => {
        const album = response.data;

        this.setState({ album: album, albumLoaded: true });

        if (album._tracks.length < 1) {
          this.setState({ tracksLoaded: true });
        } else {
          this.loadTracks();
        }
      });
  }

  loadTracks() {
    this.state.album._tracks.forEach(trackId => {
      axios
        .get('/api/track/' + trackId)
        .then(response => {
          const track = response.data;

          this.setState((state) => ({
            tracks: state.tracks.concat(track)
          }));

          if (this.state.tracks.length === this.state.album._tracks.length) {
            this.setState({ tracksLoaded: true });
          }
        });
    });
  }

  render() {
    const { albumLoaded, album, tracksLoaded, tracks } = this.state;

    if (albumLoaded) {
      return (
        <div>
          <Container className='albumContainer'>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image width={300} height={300} src={ album.image } />
                  <div className='labels' align="center">
                    { album.genres.map(genre => (
                      <Label key={ genre } className='genreLabel'>
                        { genre }
                      </Label>
                    )) }
                  </div>

                </Grid.Column>
                <Grid.Column width={11}>
                  <Grid columns='equal'>
                    <Grid.Column style={ {display: 'contents'} } >
                      <Header className='albumName' as='h2'>
                        { album.name } |
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Header className='albumArtist' as='h2'>
                        <Header.Subheader className='albumArtist'>{ album.artist_name }</Header.Subheader>
                        <Header.Subheader className='albumDescription'>{ new Date(album.released_date).getUTCFullYear() } - { album._tracks.length }</Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid>
                  <TracksList tracksLoaded={ tracksLoaded } tracks={ tracks }/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      );
    } else {
      return (
        <div className='loading'>
          <Loader active>Este álbum está sendo carregado, pode levar alguns segundos! *arhhg elfos...*</Loader>
        </div>
      );
    }
  }
}

export default Album;
