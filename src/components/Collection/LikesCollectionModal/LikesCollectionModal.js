import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

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
          <Modal.Content>
            <p>Anira</p>
            <p>Pabla</p>
            <p>70kdol</p>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default LikesCollectionModal;


