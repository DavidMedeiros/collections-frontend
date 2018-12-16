import React, { Component } from 'react';

import { Grid, Icon, Button, Label } from 'semantic-ui-react'

import FollowersCollectionModal from "./FollowersCollectionModal";
import LikesCollectionModal from "./LikesCollectionModal";

import './CollectionStatistic.scss'

class CollectionStatistic extends Component {
  constructor(props) {
    super(props);
    this.state = { followersModal: false, likesModal: false };
  }

  openFollowersModal = () => this.setState({ followersModal: true });

  openLikesModal = () => this.setState({ likesModal: true });

  handleCloseFollowersModal = show => {
    this.setState({ followersModal: !show });
  };

  handleCloseLikesModal = show => {
    this.setState({ likesModal: !show });
  };

  render() {
    return (
      <Grid.Column>
        <div align="right">
          <FollowersCollectionModal show={this.state.followersModal} close={this.handleCloseFollowersModal}/>
          <LikesCollectionModal show={this.state.likesModal} close={this.handleCloseLikesModal}/>

          <Button as='div' labelPosition='right'>
            <Button compact icon>
              <Icon name='dot circle' />
            </Button>
            <Label as='a' basic pointing='left'>
              { this.props.itensAmount }
            </Label>
          </Button>

          <Button as='div' labelPosition='right'>
            <Button compact icon>
              <Icon name='heart' />
            </Button>
            <Label as='a' basic pointing='left' onClick={ this.openLikesModal }>
              { this.props.collection._likes.length }
            </Label>
          </Button>

          <Button as='div' labelPosition='right'>
            <Button compact icon>
              <Icon name='users' />
            </Button>
            <Label as='a' basic pointing='left' onClick={ this.openFollowersModal }>
              { this.props.collection._followers.length }
            </Label>
          </Button>
        </div>
      </Grid.Column>
    );
  }
}

export default CollectionStatistic;
