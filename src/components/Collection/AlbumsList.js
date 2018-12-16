import React, { Component } from 'react';

import { Container, Card, Loader, Header, Icon } from 'semantic-ui-react'

import AlbumCard from "./AlbumCard";

class AlbumsList extends Component {
  render() {
    if (this.props.albumsLoaded) {
      if (this.props.albums.length > 0) {
        return (
          <Container style={{ padding: 15 + 'px' }}>
            <Card.Group itemsPerRow={ this.props.albums.length < 7 ? (this.props.albums.length) : (7) }>
              { this.props.albums.map(album => (
                <AlbumCard key={ album._id } image={ album.image } name={ album.name } link={'/album/' + album._id}
                           releasedYear={ new Date(album.released_date).getUTCFullYear() } />
              )) }
            </Card.Group>
          </Container>
        );
      } else {
        return(
          <Container style={{ padding: 15 + 'px' }}>
            <Header color='pink' size='tiny'>
              <Icon name='times circle outline' />
              <Header.Content>
                Esta coleções ainda não possui itens
                <Header.Subheader>
                  Adicione itens utilizando a barra de pesquisa acima.
                  É possível buscar itens pelo nome ou que estão associados a um determinado artista.
                </Header.Subheader>
              </Header.Content>
            </Header></Container>
        );
      }
    } else {
      return (
        <div className='loading'>
          <Loader active>Itens de coleções são bastante raros e requerem atenção especial,
            por isso podem levar alguns segundos para serem carregados</Loader>
        </div>
      );
    }
  }
}

export default AlbumsList;
