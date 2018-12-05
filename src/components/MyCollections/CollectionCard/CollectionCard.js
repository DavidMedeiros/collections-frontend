import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './CollectionCard.scss'
import {Link} from "react-router-dom";

class CollectionCard extends Component {
  render() {
    return (
      <Card fluid={false} className="collectionCard" color="pink" as={ Link } to={this.props.link}>
        <div style={{ backgroundImage: `url(${this.props.image})` }} className='imageCard' />
        <Card.Content textAlign="left">
          <Card.Header>
            {this.props.name.substring(0,16)}{(this.props.name.length > 16) ? ' ...' : ''}
          </Card.Header>
          <Card.Meta>
            {this.props.description.substring(0,22)}{(this.props.description.length > 22) ? ' ...' : ''}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra align="right">
          <p>
            <Icon name='dot circle' />
            {this.props.itemsAmount}
          </p>
          <p>
            <Icon name='heart' />
            {this.props.likesAmount}
          </p>
          <p>
            <Icon name='users' />
            {this.props.followersAmount}
          </p>
        </Card.Content>
      </Card>
    );
  }
}

export default CollectionCard;


