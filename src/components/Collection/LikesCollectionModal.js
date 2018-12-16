import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import CompactUsersList from "../UsersList/CompactUsersList";

class LikesCollectionModal extends Component {
  close = () => {
    const { close } = this.props;
    close (true);
  };

  render() {
    return (
      <div>
        <Modal size='tiny' open={ this.props.show } onClose={ this.close }>
          <Modal.Header>Usuários que curtiram</Modal.Header>
          <Modal.Content scrolling>
            {/*TODO Passar props dos usuarios que deram like*/}
            <CompactUsersList/>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default LikesCollectionModal;


