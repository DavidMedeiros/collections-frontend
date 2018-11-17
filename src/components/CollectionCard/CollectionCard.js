import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './CollectionCard.scss'

class CollectionCard extends Component {
  render() {
    return (
      <Card className="collection-card" color="pink" href='#card-example-link-card'>
          <div style={{ backgroundImage: `url(${this.props.image})` }} className='imageCard' />
          <Card.Content textAlign="left">
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>{this.props.description}</Card.Meta>
          </Card.Content>
          <Card.Content extra align="right">
            <a className="App-link" href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='dot circle' />
              {this.props.itemsAmount}
            </a>
            <a href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='heart' />
              {this.props.likesAmount}
            </a>
            <a href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='user' />
              {this.props.followersAmount}
            </a>
          </Card.Content>
        </Card>
    );
  }
}

export default CollectionCard;


