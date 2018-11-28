import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import './AlbumCard.scss'

class AlbumCard extends Component {
  render() {
    return (
      <Card fluid={false} className="albumCard" color="pink" href='#card-example-link-card'>
        <div style={{ backgroundImage: `url(${this.props.image})` }} className='imageAlbumCard' />
        <Card.Content textAlign="left">
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta textAlign='right'>{this.props.releasedYear}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default AlbumCard;


