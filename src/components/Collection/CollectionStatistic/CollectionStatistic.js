import React, { Component } from 'react';

import { Grid, Icon, Statistic, Popup } from 'semantic-ui-react'

import FollowersCollectionModal from "../FollowersCollectionModal/FollowersCollectionModal";
import LikesCollectionModal from "../LikesCollectionModal/LikesCollectionModal";

import './CollectionStatistic.scss'

class CollectionStatistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followersModal: false,
      likesModal: false
    };
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

          <Popup
            trigger={
              <Statistic color='grey' size='mini'>
                <Statistic.Value className='statisticCollection'>
                  <Icon className='iconBefore' name='dot circle'/>
                  { this.props.collection._items.length }
                </Statistic.Value>
              </Statistic>
            }
            content={ this.props.collection._items.length + ' Itens na coleção' }
          />
          <Popup
            trigger={
              <Statistic color='grey' size='mini' onClick={ this.openLikesModal }>
                <Statistic.Value className='statisticCollection'>
                  <Icon className='iconBefore' name='heart'/>
                  { this.props.collection._likes.length }
                </Statistic.Value>
              </Statistic>
            }
            content={ this.props.collection._likes.length + ' Curtidas' }
          />
          <Popup
            trigger={
              <Statistic color='grey' size='mini' onClick={ this.openFollowersModal }>
                <Statistic.Value className='statisticCollection'>
                  <Icon className='iconBefore' name='users'/>
                  { this.props.collection._followers.length }
                </Statistic.Value>
              </Statistic>
            }
            content={ this.props.collection._followers.length + ' Seguidores' }
          />
        </div>
      </Grid.Column>
    );
  }
}

export default CollectionStatistic;
