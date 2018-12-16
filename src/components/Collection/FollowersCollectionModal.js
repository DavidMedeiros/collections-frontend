import React, { Component } from 'react';

import { Modal } from 'semantic-ui-react';

import CompactUsersList from "../UsersList/CompactUsersList";

class FollowersCollectionModal extends Component {
  close = () => {
    const { close } = this.props;
    close (true);
  };

  render() {
    return (
      <div>
        <Modal size='tiny' open={this.props.show} onClose={this.close}>
          <Modal.Header>Seguidores</Modal.Header>
          <Modal.Content scrolling>
             {/*TODO Passar props dos seguidores*/}
            <CompactUsersList/>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default FollowersCollectionModal;


