import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './CollectionCard.scss'

class CollectionCard extends Component {
  render() {
    return (
      <Card className="collection-card" color="pink" href='#card-example-link-card'>
          <Image src='http://jetsetfashionmagazine.com/wordpress/wp-content/uploads/2012/09/151083632LL009_Lady_Gaga_Fa.jpg'  />
          <Card.Content textAlign="left">
            <Card.Header>Super pop divas </Card.Header>
            <Card.Meta>Created in 2016</Card.Meta>
            <Card.Description>Descrição da minha colleção aqui Descriç ão da minha colleção ...</Card.Description>

          </Card.Content>
          <Card.Content extra align="right">



            <a className="App-link" href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='dot circle' />
              30
            </a>
            <a href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='heart' />
              10
            </a>
            <a href='http://www.google.com.br' style={{paddingRight: 10 + 'px'}}>
              <Icon size="small" name='user' />
              10
            </a>
          </Card.Content>
        </Card>
    );
  }
}

export default CollectionCard;


