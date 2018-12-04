import React, { Component } from 'react';

import {List, Container, Grid, Loader, Image, Header, Label} from 'semantic-ui-react'

import './Album.scss'

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: ['Pop', 'Rock', 'Disco', 'Eletronic', 'Dance', 'Sex', 'Art', 'Pop'],
    };
  }

  render() {
    if (true) {
      return (
        <div>
          <Container className='albumContainer'>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image width={300} height={300} src='http://s2.glbimg.com/tm7qm9_X2t1Xf76x2Uu_eCqD_u8=/e.glbimg.com/og/ed/f/original/2016/09/15/gaga.jpg' />
                  <div className='labels' align="center">
                    { this.state.genres.map(genre => (
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
                        Joanne |
                      </Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Header className='albumArtist' as='h2'>
                        <Header.Subheader className='albumArtist'>Lady Gaga</Header.Subheader>
                        <Header.Subheader className='albumDescription'>2016 - 11 músicas</Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid>
                  <List animated divided selection verticalAlign='middle' size='large'>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        3:37
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Diamond Heart</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        3:70
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>A-YO</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        2:70
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Joanne</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        4:10
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>John Wayne</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        3:13
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Danci' Circles</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        4:05
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Perfect Illusion</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        3:05
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Milho reasons</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        2:55
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Sinners Prayer</List.Header>
                      </List.Content>
                    </List.Item>

                    <List.Item className='trackList'>
                      <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                        4:00
                      </List.Content>
                      <List.Content verticalAlign='middle'>
                        <List.Header as='h3' className='trackName'>Come to Mama</List.Header>
                      </List.Content>
                    </List.Item>



                  </List>
                </Grid.Column>
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

export default Album;
