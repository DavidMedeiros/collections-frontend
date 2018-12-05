import React, { Component } from 'react';

import { List, Loader } from 'semantic-ui-react'

import './TrackList.scss'

class TracksList extends Component {

  render() {
    if (this.props.tracksLoaded) {
        return (
          <List animated divided selection verticalAlign='middle' size='large'>
            { this.props.tracks.map(track => (
              <List.Item className='trackList' key={ this.props._id }>
                <List.Content verticalAlign='bottom' className='trackDuration' floated='right'>
                  { track.length }
                </List.Content>
                <List.Content verticalAlign='middle'>
                  <List.Header as='h3' className='trackName'>{ track.name }</List.Header>
                </List.Content>
              </List.Item>
            )) }
          </List>
        );
    } else {
      return (
        <div className='loading'>
          <Loader active>Rebobinando as faixas do álbum</Loader>
        </div>
      );
    }
  }
}

export default TracksList;
