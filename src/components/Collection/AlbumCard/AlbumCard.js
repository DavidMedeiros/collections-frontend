import React, { Component } from 'react';

import { Card } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import './AlbumCard.scss'

class AlbumCard extends Component {
  render() {
    return (
      <Card fluid={ false } className="albumCard" color="pink"  as={ Link } to={ this.props.link }>
        <div style={ {backgroundImage: `url(${this.props.image})`} } className='imageAlbumCard' />
        <Card.Content className='albumCardContent' textAlign="left">
          <Card.Header>{ this.props.name.substring(0,13)}{(this.props.name.length > 13) ? '...' : '' }</Card.Header>
          <Card.Meta textAlign='right'>{ this.props.releasedYear }</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default AlbumCard;


